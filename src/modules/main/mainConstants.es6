export const ACTION_LOADING_MAIN_PAGE = "ACTION_LOADING_MAIN_PAGE";
export const ACTION_LOADING_MODAL = "ACTION_LOADING_MODAL";
export const ACTION_TOGGLE_DRAWER = "ACTION_TOGGLE_DRAWER";
export const ACTION_ADD_NOTIFICATION = "ACTION_ADD_NOTIFICATION";

export const store = {
    "widgets": {
        "spinner": {
            "open": false
        },
        "drawer": {
            "open": false
        },
        "modal": {
            "loading": false
        }
    },
    "notifications": 0
};
