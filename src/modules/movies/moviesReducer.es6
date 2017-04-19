import update from "react-addons-update";
import {
    ACTION_MOVIES_GET,
    ACTION_COMMENTS_GET,
    ACTION_COMMENTS_POST,
    ACTION_FORM_COMMENT_UPDATE,
    store, ACTION_MOVIES_PUSH
} from "./moviesConstants";

export const commentsReducer = (state = store.comments, action) => {

        switch (action.type) {

            case ACTION_COMMENTS_GET:
                return action.list;

            case ACTION_COMMENTS_POST:
                return update(state, {"$push": [action.comment] });

            default:
                return state;
        }

    },
    formCommentReducer = (state = store.forms.comment, action) => {

        switch (action.type) {

            case ACTION_FORM_COMMENT_UPDATE:
                return update(state, {
                    [action.data.name]: {
                        "$set": action.data.value
                    }
                });
            default:
                return state;
        }

    },
    moviesReducer = (state = store.movies, action) => {

        switch (action.type) {
            case ACTION_MOVIES_GET:
                return action.list;
            case ACTION_MOVIES_PUSH:

                return update([action.movie], {
                    "$push": state
                });
            default:
                return state;
        }

    };
