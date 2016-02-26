/*eslint-env node*/

var path = require( "path" );

module.exports = {

    entry: {

        "public/js/bundle": path.resolve( __dirname, "js/partials.js" )

    },
    output: {

        path: path.resolve( __dirname, "app" ),
        publicPath: "/",
        filename: "[name].js",
        libraryTarget: "umd"

    },
    "resolve": {

        "alias": {

            "react-redux": path.resolve( __dirname, "js/proxies/react-redux" ),
            "react": path.resolve( __dirname, "js/proxies/react" ),
            "redux": path.resolve( __dirname, "js/proxies/redux" ),
            "redux-thunk": path.resolve( __dirname, "js/proxies/redux-thunk" )

        }

    },
    module: {

        "loaders": [

            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [ "es2015", "react" ]
                }
            }

        ]

    }

};
