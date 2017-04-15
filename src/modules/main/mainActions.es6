import {
    ACTION_LOADING_MAIN_PAGE,
    ACTION_TOGGLE_DRAWER,
    ACTION_LOADING_MODAL, ACTION_ADD_NOTIFICATION
} from "./mainConstants";

export const addNotification = () => {
        debugger;
        return (dispatch) => {
            debugger;
            dispatch({"type": ACTION_ADD_NOTIFICATION});

        };

    }, hideDrawer = () => {

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
    modalLoading = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MODAL, "flag": true});

        };

    }, modalNotLoading = () => {

        return (dispatch) => {

            dispatch({"type": ACTION_LOADING_MODAL, "flag": false});

        };

    },
    showDrawer = (flag) => {

        return (dispatch) => {

            dispatch({"type": ACTION_TOGGLE_DRAWER, "flag": true});

        };

    };
