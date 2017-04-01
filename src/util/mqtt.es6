import mqtt from "mqtt";



export const connect = () => {

    const client = mqtt.connect("ws://activemq.crisostomo.soy/mqtt", options),
        options = {
            "connectTimeout": 3 * 1000,

            "protocolId": "MQTT",
            "protocolVersion": 3,
            "clientId": ( "mqttjs_" + Math.random().toString(16).substr(2, 8))
        };

    client.on("connect", () => {

        console.log("Connection successfull!");

        client.subscribe("movies", (err, granted) => {

            if (err) {

                console.error(err);

            } else if (granted) {

                console.info(granted);

            } else {



            }

        });


        client.publish("movies", "Hello mqtt");


    });



    client.on("message", (topic, message) => {

        console.log(topic, message.toString());

    });
};

