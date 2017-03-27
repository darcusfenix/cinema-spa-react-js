import axios from "axios";

/**
 * @description
 * @param {{url: string, method: string, params: {}, data: {}}} conf :
 * configuration of request
 * @return {Promise.<T>|Promise<R>} : Promise
 */
const request = (conf) => {

    const {url, method = "get", params = {}, data = {}} = conf,
        config = {
            "url": url,
            "method": method,
            "baseURL": "http://cinema.crisostomo.soy/api/",
            "headers": {"Content-Type": "application/json"},
            "params": params,
            "data": data,
            "timeout": 10000
        }, instance = axios.create();

    /* global Promise*/
    return new Promise((resolve, reject) => {

        instance.request(config).then((respose) => {

            resolve(respose.data);

        }).catch((error) => {

            reject(error);

        });

    });

};

export default request;
