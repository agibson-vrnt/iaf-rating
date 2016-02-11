/*eslint-env node*/

var fs = require( "fs" );
var handlebars = require( "handlebars" );
var template = handlebars.compile( fs.readFileSync( __dirname + "/client-config.template.js" ).toString() );
var scriptjs = fs.readFileSync( __dirname + "/../node_modules/scriptjs/dist/script.min.js" );
module.exports = function( config, publicRoot ) {

	return template( {

		"iaf-url": config.iaf.url,
		"iaf-version": config.iaf.version,
		"partials-url": publicRoot + "/js/bundle.js",
		"scriptjs": scriptjs,
		"partials-loader-url": config.iaf.partials.loader.url

	} );

};
