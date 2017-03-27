import {ACTION_LOADING_MAIN_PAGE, ACTION_TOGGLE_DRAWER} from "./mainConstants";

export const hideDrawer = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_TOGGLE_DRAWER, "flag": false});

        };

    }, mainPageLoading = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": false});

        };

    }, mainPageNotLoading = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MAIN_PAGE, "flag": true});

        };

    },
    showDrawer = (flag) => {

        return (dispatch) => {

            dispatch({"type": ACTION_TOGGLE_DRAWER, "flag": true});

        };

    };
