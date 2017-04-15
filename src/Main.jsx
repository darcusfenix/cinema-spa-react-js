import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import Badge from "material-ui/Badge";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import {hideDrawer, showDrawer} from "./modules/main/mainActions";
import drawerListItems from "./constants/menuItems";
import Notification from "./util/Notification";
import {Header, CrisostomoTheme, Menu, Spinner} from "crisostomo-ui";

injectTapEventPlugin();

@connect((store) => {

    return {
        "drawerState": store.drawer,
        "notifications": store.notifications,
        "loadingPage": store.loadingPage
    };

})
export default class Main extends Component {

    constructor(props, context) {

        super(props, context);
        this.state = {"pageTitle": "Cinema - Juan Crisóstomo"};
        this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
        this.handleOnTouchTapDrawer = this.handleOnTouchTapDrawer.bind(this);
        this.handleOnTouchModal = this.handleOnTouchModal.bind(this);

    }

    /**
     * @description Cambia el drawer/menú. Obtiene el estado de redux
     * @return {void}
     */
    handleToggleDrawer() {

        if (this.props.drawerState) {

            this.props.dispatch(hideDrawer());

        } else {

            this.props.dispatch(showDrawer());

        }

    }

    /**
     * @description Se ejecuta al dar click en una opción del drawer
     * @param {string} link: ruta que se desea cambiar por medio de react-router
     * @return {void}
     */
    handleOnTouchTapDrawer(link) {

        if (!link) {

            return;

        }

        browserHistory.push(link.url);
        this.setState({"pageTitle": link.pageTitle});
        this.props.dispatch(hideDrawer());

    }

    handleOnTouchModal() {


    }

    componentDidMount() {

        const {dispatch} = this.props,
            notif = new Notification(dispatch);
        notif.connect();

    }

    render() {

        const iconElementRight = <div>
            <Badge
                badgeContent={this.props.notifications}
                secondary={false}>
                <NotificationsIcon
                    style={{"color": "#FFF"}}/>
            </Badge>
            <IconMenu
                style={{"color": "#FFF"}}
                iconButtonElement={<IconButton
                    iconStyle={{"color": "#FFF"}}>
                    <MoreVertIcon /></IconButton>}>
                <MenuItem primaryText="Actualizar"/>
                <MenuItem primaryText="Ayuda"/>
                <MenuItem primaryText="Cerrar sesión"/>
            </IconMenu></div>;

        return (
            <CrisostomoTheme>
                <div>
                    <Header title={this.state.pageTitle}
                            zDepth={0}
                            iconElementRight={iconElementRight}
                            onLeftIconButtonTouchTap={this.handleToggleDrawer}/>

                    <Menu onRequestChange={this.handleToggleDrawer}
                          onTouchTap={this.handleOnTouchTapDrawer}
                          listItems={drawerListItems}
                          open={this.props.drawerState}/>

                    {this.props.children}

                    <Spinner visible={this.props.loadingPage}/>


                </div>
            </CrisostomoTheme>
        );

    }
}

Main.propTypes = {
    "notifications": PropTypes.number,
    "drawerState": PropTypes.bool,
    "loadingPage": PropTypes.bool,
    "children": PropTypes.node,
    "dispatch": PropTypes.func
};
