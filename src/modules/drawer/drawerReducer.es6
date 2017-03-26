import * as types from "../../actions";
import initialState from "../../store/initialState";

const drawerReducer = (state = initialState.widgets.drawer.open, action) => {

    switch (action.type) {
        case types.ACTION_DRAWER_TOGGLE:
            return action.flag;
        default:
            return state;
    }

};

export default drawerReducer;
