import {
    ACTION_MOVIES_GET,
    ACTION_COMMENTS_GET,
    ACTION_COMMENTS_POST,
    ACTION_FORM_COMMENT_UPDATE,
    ENDPOINT_MOVIES,
    ENDPOINT_COMMENTS
} from "./moviesConstants";
import {
    ACTION_LOADING_MAIN_PAGE,
    ACTION_LOADING_MODAL
} from "../main/mainConstants";
import request from "../../util/request";

export const getCommentsByMovie = (movieId) => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MODAL, "flag": true});

            return request({
                "url": ENDPOINT_COMMENTS,
                "params": {
                    "movie": movieId
                }
            }).then((response) => {

                dispatch({"type": ACTION_COMMENTS_GET, "list": response});

            }).catch((error) => {

                dispatch({"type": ACTION_COMMENTS_GET, "list": []});

            }).then(() => {

                dispatch({"type": ACTION_LOADING_MODAL, "flag": false});

            });

        };

    }, getListMovies = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": true});

            return request({"url": ENDPOINT_MOVIES}).then((response) => {

                dispatch({"type": ACTION_MOVIES_GET, "list": response});

            }).catch((error) => {

                dispatch({"type": ACTION_MOVIES_GET, "list": []});

            }).then(() => {

                dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": false});

            });

        };

    },
    /**
     * @description Makes http request to save a comment of
     * a movie.
     * @param {{title: string, message: string, movie:string}} comment:
     * Object mandotary to save a comment.
     * @return {function(*)} : dispatch to ACTION_COMMENTS_GET on success
     */
    saveComment = (comment) => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MODAL, "flag": true});

            return request({
                "url": ENDPOINT_COMMENTS,
                "method": "post",
                "data": comment
            }).then((response) => {

                dispatch({"type": ACTION_COMMENTS_POST, "comment": response});

            }).catch((error) => {

            }).then(() => {

                dispatch({"type": ACTION_LOADING_MODAL, "flag": false});

            });

        };

    },
    /**
     * @description Update the atributes of model Comment
     * @param {string} name : atribute of model Comment
     * @param {string} value: value of atribute's model Comment
     * @return {function(*)} : dispatch to ACTION_FORM_COMMENT_UPDATE
     */
    updateFormComment = (name, value) => {

        return (dispatch) => {

            dispatch({
                "type": ACTION_FORM_COMMENT_UPDATE,
                "data": {name, value}
            });

        };

    };
