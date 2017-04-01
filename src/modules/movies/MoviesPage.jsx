import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import moment from "moment";
//import {Modal} from "crisostomo-ui";
import Modal from "../../widgets/Modal";
import MovieItem from "./movieItem";
import {getListMovies, getCommentsByMovie, saveComment, updateFormComment} from "./moviesActions";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";

@connect((store) => {

    return {
        "loadingModal": store.loadingModal,
        "movies": store.movies,
        "comments": store.comments
    };

})
export default class MoviesPage extends Component {

    constructor(props, context) {

        super(props, context);
        this.state = {"showComments": false};
        this.handleOnTouchTapCancel = this.handleOnTouchTapCancel.bind(this);
        this.handleOnTouchTapOk = this.handleOnTouchTapOk.bind(this);
        this.handleOnChangeTextField = this.handleOnChangeTextField.bind(this);
        this.onTouchTapComment = this.onTouchTapComment.bind(this);
        this.currentMovie = {};

    }

    componentDidMount() {

        this.props.dispatch(getListMovies());

    }

    onTouchTapComment(index) {

        this.setState({"showComments": true});

        this.currentMovie = this.props.movies[index];
        this.props.dispatch(getCommentsByMovie(this.currentMovie["_id"]));

    }

    handleOnTouchTapCancel() {

        this.setState({"showComments": false});

    }

    handleOnTouchTapOk() {

        const message = this.refs.message.getValue();

        this.props.dispatch(saveComment({
            "message": message,
            "movie": this.currentMovie["_id"],
            "title": "comment from the web"
        }));

        this.refs.message.value = "";

    }

    handleOnChangeTextField(event) {

        event.preventDefault();
        const field = event.target.name,
            value = event.target.name;

        this.props.dispatch(updateFormComment({
            "value": value,
            "name": field
        }));

    }

    render() {

        const buildComments = () => {

                return this.props.comments.map((comment, i) => <ListItem
                    key={`movie-comment-${i}`}
                    primaryText={comment.message}
                    secondaryText={moment(comment.date).fromNow()}/>);

            },
            buildMovieGallery = () => {

                return this.props.movies.map((movie, i) => <MovieItem
                    key={`movie-grid-${i}`}
                    index={i}
                    onTouchTapComment={this.onTouchTapComment}
                    movie={movie}/>);

            };

        return <div className="row movies-page-container">

            {buildMovieGallery()}

            {
                this.currentMovie.title &&
                <Modal open={this.state.showComments}
                       showSpinner={this.props.loadingModal}
                       title={this.currentMovie.title}
                       labelOK={"Comment"}
                       labelCancel={"Close"}
                       handleOnTouchTapOk={this.handleOnTouchTapOk}
                       handleOnTouchTapCancel={this.handleOnTouchTapCancel}>
                    <div className="row movie-comments-container">
                        <div className="col-sm-12">
                            <span className="movie-description-modal">
                                {this.currentMovie.description}
                            </span>
                        </div>
                        <div className="col-sm-12">
                            <List>
                                <Subheader>Comments</Subheader>
                                {buildComments()}
                            </List>
                        </div>
                        <Divider/>
                        <div className="col-sm-12">
                            <TextField
                                name="message"
                                ref="message"
                                floatingLabelText="write something..."
                                multiLine={true}
                                fullWidth={true}
                                rows={2}
                                rowsMax={4}/>
                        </div>
                    </div>
                </Modal>
            }

        </div>;

    }

}

MoviesPage.propTypes = {
    "dispatch": PropTypes.func,
    "loadingModal": PropTypes.bool,
    "movies": PropTypes.array,
    "comments": PropTypes.array
};
