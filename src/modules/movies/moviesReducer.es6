import {
    ACTION_GET_MOVIES,
    ACTION_GET_COMMENTS,
    store
} from "./moviesConstants";

export const commentsReducer = (state = store.comments, action) => {

        switch (action.type) {
            case ACTION_GET_COMMENTS:
                return action.list;
            default:
                return state;
        }

    },
    moviesReducer = (state = store.movies, action) => {

        switch (action.type) {
            case ACTION_GET_MOVIES:
                return action.list;
            default:
                return state;
        }

    };
