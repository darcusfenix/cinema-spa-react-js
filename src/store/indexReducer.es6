import {combineReducers} from "redux";
import {
    moviesReducer as movies,
    commentsReducer as comments
} from "../modules/movies/moviesReducer";
import {
    loadingPageReducer as loadingPage,
    loadingModalReducer as loadingModal,
    drawerReducer as drawer
} from "../modules/main/mainReducer";

const rootReducer = combineReducers({
    loadingPage,
    loadingModal,
    drawer,
    movies,
    comments
});

export default rootReducer;
