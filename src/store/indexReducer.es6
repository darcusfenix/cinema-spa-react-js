import {combineReducers} from "redux";
import {
    formCommentReducer as formComment,
    moviesReducer as movies,
    commentsReducer as comments
} from "../modules/movies/moviesReducer";
import {
    loadingPageReducer as loadingPage,
    loadingModalReducer as loadingModal,
    addNotificationReducer as notifications,
    drawerReducer as drawer
} from "../modules/main/mainReducer";

const rootReducer = combineReducers({
    loadingPage,
    loadingModal,
    formComment,
    drawer,
    notifications,
    movies,
    comments
});

export default rootReducer;
