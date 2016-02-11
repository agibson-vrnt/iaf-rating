/*eslint-env node*/

var config = {

    port: 8080,
    iaf: {

        loaderTemplate: "http://localhost:8081/public/js/loader-template.js",
        url: "http://localhost:8081/public/js/iaf-1.0.0-client.js",
        serverUrl: "http://localhost:8081/public/js/iaf-1.0.0-server.js",
        version: "1.0.0"
    }

};

var express = require( "express" );
var expressHandlebars = require( "express-handlebars" );
var loaderFactory = require( "./loader-factory" );
var async = require( "async" );
var request = require( "request" );
var vm = require( "vm" );

var app = express();
app.engine( ".hbs", expressHandlebars( {

    defaultLayout: "main",
    extname: ".hbs",
    views: __dirname + "/views"

} ) );
app.set( "view engine", ".hbs" );
app.use( "/public", express.static( __dirname + "/public" ) );
app.use( ( req, res, next ) => {

    console.log( req.method, req.url );
    next();

} );
app.use( ( req, res, next ) => {

    req.fullSchemeAndHost = req.protocol + "://" + req.get("host");
    next();

} );
app.get( "/partials-loader", ( req, res ) => {

    loaderFactory.build( config, req.fullSchemeAndHost + "/public", ( err, loader ) => {

        if( err ) { throw err; }
        res.type( "application/javascript" ).send( loader );

    } );

} );
async.waterfall( [

    ( next ) => request( config.iaf.serverUrl, next ),
    ( response, body, next ) => {

        var sandbox = {};
        var success = vm.runInNewContext( body, sandbox );
        next( !success, sandbox.default );

    }

], ( e, iaf ) => {

    if( e ) { throw e; }

    global.iaf = { rating: { iaf: iaf } };
    var partials = require( "./public/js/bundle.js" ).default;

    app.use( ( req, res, next ) => {

        var renderView = res.render.bind( res );
        res.render = ( partialName, partialModel, viewOptions ) => {

            var partial = partials[ partialName ];
            if( !partial ) { throw new Error( "Unable to find partial view " + partialName ); }
            var element = iaf.React.createElement( partial, partialModel );

            viewOptions = viewOptions || {};

            viewOptions.model = viewOptions.model || {};
            viewOptions.model.partialId = viewOptions.model.partialId || "iaf565656565";
            viewOptions.model.partialHTML = iaf.ReactServer.renderToString( element );
            viewOptions.model.partialScript = "iaf.rating.bootstrapPartial( \"Main\", \"#" + viewOptions.model.partialId + "\" );";

            viewOptions.view = viewOptions.view || "index";
            renderView( viewOptions.view, viewOptions.model );

        };
        next();

    } );
    app.get( "/", ( req, res ) => res.render( "Main" ) );
    app.listen( config.port, () => {

        console.log( "Listening on", config.port );

    } );

} );
