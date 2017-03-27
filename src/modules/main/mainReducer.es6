import {
    ACTION_LOADING_MAIN_PAGE,
    ACTION_TOGGLE_DRAWER,
    store
} from "./mainConstants";

export const drawerReducer = (state = store.widgets.drawer.open, action) => {

    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return action.flag;
        default:
            return state;
    }

}, loadingPageReducer = (state = store.widgets.spinner.open,
                         action) => {

    switch (action.type) {
        case ACTION_LOADING_MAIN_PAGE:
            return action.flag;
        default:
            return state;
    }

};
