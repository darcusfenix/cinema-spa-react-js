import update from "react-addons-update";
import {
    ACTION_LOADING_MAIN_PAGE,
    ACTION_TOGGLE_DRAWER,
    ACTION_LOADING_MODAL,
    store, ACTION_ADD_NOTIFICATION
} from "./mainConstants";

export const addNotificationReducer = (state = store.notifications, action) => {

        switch (action.type) {
            case ACTION_ADD_NOTIFICATION:

                return update(state, {
                    "$set": state = state + 1
                });

            default:
                return state;
        }

    }, drawerReducer = (state = store.widgets.drawer.open, action) => {

        switch (action.type) {
            case ACTION_TOGGLE_DRAWER:
                return action.flag;
            default:
                return state;
        }

    }, loadingModalReducer = (state = store.widgets.modal.loading,
                              action) => {

        switch (action.type) {
            case ACTION_LOADING_MODAL:
                return action.flag;
            default:
                return state;
        }

    },
    loadingPageReducer = (state = store.widgets.spinner.open,
                          action) => {

        switch (action.type) {
            case ACTION_LOADING_MAIN_PAGE:
                return action.flag;
            default:
                return state;
        }

    };
