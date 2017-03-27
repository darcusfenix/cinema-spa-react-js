import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import MovieItem from "./movieItem";
import {getListMovies} from "./moviesActions";

@connect((store) => {

    return {
        "movies": store.movies
    };

})
export default class MoviesPage extends Component {

    constructor(props, context) {

        super(props, context);

    }

    componentWillMount() {

        this.props.dispatch(getListMovies());

    }

    render() {

        const buildMovieGallery = () => {

            return this.props.movies.map((movie, i) => <MovieItem
                key={`movie-grid-${i}`}
                movie={movie}/>);

        };

        return <div className="row movies-page-container">

            {buildMovieGallery()}

        </div>;

    }

}

MoviesPage.propTypes = {
    "dispatch": PropTypes.func,
    "movies": PropTypes.array
};
