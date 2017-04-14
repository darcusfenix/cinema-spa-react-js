export default class Notification {

    constructor() {

        const conexionExitosa = () => {

                console.log("conexionExitosa");
                client.subscribe("comments", {
                    "timeout": 3000,
                    "onFailure": onFailure,
                    "onSuccess": onSuccess
                });


            },
            conexionFallida = (e) => {

                console.log(e);
                setTimeout(this.conectarse, 5000);

            },
            conexionPerdida = (responseObject) => {

            console.log(responseObject);
                if (responseObject.errorCode !== 0) {

                    setTimeout(this.conectarse, 5000);

                }

            },
            mensajeRecibido = (message) => {

            console.log(message.payloadString);
                //alert(JSON.parse(message.payloadString));

            },
            onFailure = (invocationContext, errorCode) => {

                console.log("onFailure");
                console.error(invocationContext);
                console.error(errorCode);

            },
            onSuccess = (invocationContext, errorCode) => {

                console.log("onSuccess");
                console.error(invocationContext);
                console.error(errorCode);

            };

        const client = new Paho.MQTT.Client(
            "activemq.crisostomo.soy",
            80,
            "/activemq" + parseInt(Math.random() * 100, 10));

        client.onConnectionLost = conexionPerdida;
        client.onMessageArrived = mensajeRecibido;

        try {

            client.connect({
                "onSuccess": conexionExitosa,
                "onFailure": conexionFallida,
                "keepAliveInterval": 5,
                "timeout": 5,
                "useSSL": false
            });

        } catch (e) {

            console.error(e);

        }

    }

}

