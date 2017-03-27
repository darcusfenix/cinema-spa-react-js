import React, {PropTypes} from "react";
import IconButton from "material-ui/IconButton";
import Comment from "material-ui/svg-icons/communication/comment";
import {GridTile} from "material-ui/GridList";

const movieItem = (props) => {

    const {movie} = props;

    return <div className="movies-column col-sm-6 col-md-3 col-xs-12">

        <GridTile
            title={movie.title}
            cols={1}
            rows={1}
            subtitle={movie.description}
            actionIcon={<IconButton>
                <Comment color="white"/>
            </IconButton>}>
            <div className="movies-gallery-container">

                <img src={movie.imageUrl}/>

            </div>
        </GridTile>

    </div>;

};


movieItem.propTypes = {
    "movie": PropTypes.object.isRequired
};


export default movieItem;
