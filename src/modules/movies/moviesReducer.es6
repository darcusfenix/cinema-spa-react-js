import {ACTION_GET_MOVIES, store} from "./moviesConstants";

const moviesReducer = (state = store.list, action) => {

    switch (action.type) {
        case ACTION_GET_MOVIES:
            return action.list;
        default:
            return state;
    }

};

export default moviesReducer;
