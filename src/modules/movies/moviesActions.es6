import {
    ACTION_GET_MOVIES,
    ACTION_GET_COMMENTS,
    ENDPOINT_MOVIES,
    ENDPOINT_MOVIE_COMMENTS
} from "./moviesConstants";
import {
    ACTION_LOADING_MAIN_PAGE,
    ACTION_LOADING_MODAL
} from "../main/mainConstants";
import request from "../../util/request";

export const getListMovies = () => {

    return (dispatch) => {

        dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": true});

        return request({"url": ENDPOINT_MOVIES}).then((response) => {

            dispatch({"type": ACTION_GET_MOVIES, "list": response});

        }).catch((error) => {

            dispatch({"type": ACTION_GET_MOVIES, "list": []});

        }).then(() => {

            dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": false});

        });

    };

};

export const getCommentsByMovie = (movieId) => {

    return (dispatch) => {

        dispatch({"type": ACTION_LOADING_MODAL, "flag": true});

        return request({"url": ENDPOINT_MOVIE_COMMENTS}).then((response) => {

            dispatch({"type": ACTION_GET_COMMENTS, "list": response});

        }).catch((error) => {

            dispatch({"type": ACTION_GET_COMMENTS, "list": []});

        }).then(() => {

            dispatch({"type": ACTION_LOADING_MODAL, "flag": false});

        });

    };

};
