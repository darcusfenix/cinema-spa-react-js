import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import configureStore from "./store/configureStore";
import "flexboxgrid/css/flexboxgrid.css";
import "!style-loader!css-loader!./assets/css/main.css";
import "!style-loader!css-loader!../node_modules/crisostomo-ui/dist/style.css";
import routes from "./constants/routes";

const store = configureStore();

render(
    <Provider store={store}>

        <Router history={browserHistory} routes={routes}/>

    </Provider>,
    document.getElementById("root")
);
