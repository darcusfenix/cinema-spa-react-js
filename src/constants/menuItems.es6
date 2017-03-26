import React from "react";
import Store from "material-ui/svg-icons/action/store";
import ShoppingBaskettIcon from "material-ui/svg-icons/action/shopping-basket";
import ShoppingCartIcon from "material-ui/svg-icons/action/shopping-cart";
import SupervisorIcon from "material-ui/svg-icons/action/supervisor-account";
import HomeIcon from "material-ui/svg-icons/action/home";
import YoutubeIcon from "material-ui/svg-icons/action/youtube-searched-for";
import WorkIcon from "material-ui/svg-icons/action/work";
import ViewAgendaIcon from "material-ui/svg-icons/action/view-agenda";
import ZoomOutIcon from "material-ui/svg-icons/action/zoom-out";
import LocalOfertIcon from "material-ui/svg-icons/maps/local-offer";
import PlayIcon from "material-ui/svg-icons/av/play-arrow";

export default [
    {
        "primaryText": "Dasboard",
        "leftIcon": <HomeIcon />,
        "link": {
            "url": "/",
            "pageTitle": "Dasboard"
        }
    },
    {
        "primaryText": "Movies",
        "leftIcon": <PlayIcon />,
        "link": {
            "url": "/movies",
            "pageTitle": "Movies"
        }
    },
    {
        "primaryText": "eCommerce",
        "leftIcon": <ShoppingCartIcon />,
        "nestedItems": [
            {
                "primaryText": "Orders",
                "leftIcon": <SupervisorIcon />,
                "link": {
                    "url": "/eCommerce/orders",
                    "pageTitle": "Orders"
                }
            },
            {
                "primaryText": "Order view",
                "leftIcon": <LocalOfertIcon />,
                "link": {
                    "url": "/eCommerce/order/view",
                    "pageTitle": "Order view"
                }
            },
            {
                "primaryText": "Products",
                "leftIcon": <ShoppingBaskettIcon />,
                "link": {
                    "url": "/eCommerce/productos",
                    "pageTitle": "Products"
                }
            },
            {
                "primaryText": "Product edit",
                "leftIcon": <Store />,
                "link": {
                    "url": "/eCommerce/productos/edit",
                    "pageTitle": "Producto edit"
                }
            }
        ]
    },
    {
        "primaryText": "Apps",
        "leftIcon": <ZoomOutIcon />,
        "link": {
            "url": "/apps",
            "pageTitle": "Apps"
        }
    },
    {
        "primaryText": "Users",
        "leftIcon": <ViewAgendaIcon />,
        "link": {
            "url": "/users",
            "pageTitle": "Users"
        }
    },
    {
        "primaryText": "General",
        "leftIcon": <WorkIcon />,
        "link": {
            "url": "/general",
            "pageTitle": "General"
        }
    },
    {
        "primaryText": "System",
        "leftIcon": <YoutubeIcon />,
        "link": {
            "url": "/system",
            "pageTitle": "System"
        }
    },
];
