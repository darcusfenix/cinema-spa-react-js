import React, {PropTypes} from "react";

const spinner = (props) => {

    const {visible = false} = props,
        style = {"display": "none"};

    if (visible) {

        style.display = "block";

    }

    return <div className="crisostomo-spinner-container" style={style}>
        <div className="crisostomo-spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    </div>;

};

spinner.propTypes = {
    "visible": PropTypes.bool
};

export default spinner;
