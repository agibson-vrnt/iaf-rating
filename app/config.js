/*eslint-env node*/
module.exports = {

    port: 8080,
    ns: "rating",
    iaf: {

        loaderTemplate: "http://localhost:8081/public/js/loader-template.js",
        url: "http://localhost:8081/public/js/iaf-1.0.0-client.js",
        serverUrl: "http://localhost:8081/public/js/iaf-1.0.0-server.js",
        version: "1.0.0"

    }

};
