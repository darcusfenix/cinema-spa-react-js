import {createStore, applyMiddleware} from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "./indexReducer";

const configureStore = (initialState) => {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariant(), createLogger())
    );

};

export default configureStore;
