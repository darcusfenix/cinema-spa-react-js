import {combineReducers} from "redux";
import movies from "../modules/movies/moviesReducer";
import {
    loadingPageReducer as loadingPage,
    drawerReducer as drawer
} from "../modules/main/mainReducer";

const rootReducer = combineReducers({
    loadingPage,
    drawer,
    movies
});

export default rootReducer;
