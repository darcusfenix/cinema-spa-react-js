/* global Paho */
import {ACTION_ADD_NOTIFICATION} from "../modules/main/mainConstants";
import {ACTION_MOVIES_PUSH, ENDPOINT_MOVIES} from "../modules/movies/moviesConstants";
import request from "../util/request";

export default class Notification {

    constructor(dispatch) {

        this.dispatch = dispatch;
        this.client = {};
        this.url = "activemq.crisostomo.soy";
        this.port = 80;
        this.id = "/activemq" + parseInt(Math.random() * 100, 10);
        this.topics = ["comments", "movies"];

        this.client = new Paho.MQTT.Client(
            this.url,
            this.port,
            this.id
        );

        this.client.onConnectionLost = this.onConnectionLost;
        this.client.onMessageArrived = this.onMessageArrived;

    }

    connect = () => {

        try {

            this.client.connect({
                "onSuccess": this.connectionSuccess,
                "onFailure": this.connectionFailure,
                "keepAliveInterval": 5,
                "timeout": 5,
                "useSSL": false
            });

        } catch (e) {

            console.error(e);

        }

    };

    connectionSuccess = () => {

        console.log("connectionSuccess");
        this.topics.map((topic) => {

            this.client.subscribe(topic, {
                "timeout": 3000,
                "onFailure": this.subscribeFailure,
                "onSuccess": this.subscribeSuccess
            });

        });

    };

    connectionFailure = (e) => {

        console.log(e);
        setTimeout(this.connect, 5000);

    };

    onConnectionLost = (responseObject) => {

        console.log(responseObject);
        if (responseObject.errorCode !== 0) {

            setTimeout(this.connect, 5000);

        }

    };

    onMessageArrived = (message) => {

        switch (message.destinationName) {

            case "comments":

                this.dispatch({"type": ACTION_ADD_NOTIFICATION});
                break;
            case "movies":

                request({
                    "url": `${ENDPOINT_MOVIES}/${message.payloadString}`
                }).then((response) => {

                    this.dispatch({"type": ACTION_ADD_NOTIFICATION});
                    this.dispatch({"type": ACTION_MOVIES_PUSH, "movie": response});

                }).catch((error) => {

                }).then(() => {

                });
                break;
            default:
                break;

        }

        console.log(message.payloadString);

    };

    subscribeFailure = (invocationContext, errorCode) => {

        console.log("subscribeFailure");
        if (invocationContext) {

            console.log(invocationContext);

        } else if (errorCode) {

            console.log(errorCode);

        }

    };

    subscribeSuccess = (invocationContext, errorCode) => {

        console.log("subscribeSuccess");
        if (invocationContext) {

            console.log(invocationContext);

        } else if (errorCode) {

            console.log(errorCode);

        }

    };

}

