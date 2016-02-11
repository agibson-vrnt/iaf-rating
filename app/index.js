/*eslint-env node*/
var config = require( "./config" );

// utils
var iafScriptEval = require( "./iaf-script-eval" );
var viewEngineConfig = require( "./view-engine-config" );

// middleware
var logging = require( "./middleware/logging" );
var requestMetadata = require( "./middleware/request-metadata" );

// route builders
var routeBuilders = {

    partialsLoader: require( "./routes/partials-loader" ),
    root: require( "./routes/root" )

};

var express = require( "express" );
var app = express();
// static routes
app.use( "/public", express.static( __dirname + "/public" ) );
// adds metadata to the request
app.use( requestMetadata );
// logs requests
app.use( logging );
// configure the view engine
viewEngineConfig.configure( app, config );
// fetch and evaluate the iaf scripts
iafScriptEval.fetch( app, config, ( err ) => {

    if( err ) { throw err; }
    // now that iaf script is loaded, we can require the partials renderer
    var renderPartials = require( "./render-partials" );
    app.use( renderPartials );
    // register routes
    routeBuilders.partialsLoader.configure( app, config );
    routeBuilders.root.configure( app, config );
    // listen
    app.listen( config.port, () => console.log( "Listening on", config.port ) ); // eslint-disable-line no-console

} );
