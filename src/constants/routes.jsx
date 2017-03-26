import Main from "../Main";
import Dashboard from "../modules/dashboard/DashboardPage";
import Movies from "../modules/movies/MoviesPage";
import Error from "../modules/error/ErrorPage";

export default {
    "path": "/",
    "component": Main,
    "indexRoute": {"component": Dashboard},
    "childRoutes": [
        {"path": "movies", "component": Movies},
        {"path": "*", "component": Error}
    ]
};
