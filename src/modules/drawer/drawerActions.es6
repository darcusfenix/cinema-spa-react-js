import * as types from "../../actions";

let toggleDrawer = (flag) => {

    return {
        "type": types.ACTION_DRAWER_TOGGLE, flag
    };

};

export const hideDrawer = () => {

        return (dispatch) => {

            dispatch(toggleDrawer(false));

        };

    },
    showDrawer = () => {

        return (dispatch) => {

            dispatch(toggleDrawer(true));

        };

    };
