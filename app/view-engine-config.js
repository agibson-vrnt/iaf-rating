/*eslint-env node*/

var expressHandlebars = require( "express-handlebars" );

module.exports = {

    configure: ( app ) => {

        app.engine( ".hbs", expressHandlebars( {

            defaultLayout: "main",
            extname: ".hbs",
            views: __dirname + "/views"

        } ) );
        app.set( "view engine", ".hbs" );

    }

};
