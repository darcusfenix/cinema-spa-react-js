import {ACTION_GET_MOVIES, ENDPOINT_MOVIES} from "./moviesConstants";
import {ACTION_LOADING_MAIN_PAGE} from "../main/mainConstants";
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
