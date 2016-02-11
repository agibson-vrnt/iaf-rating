/*eslint-env node*/

var handlebars = require( "handlebars" );
var request = require( "request" );
var cachedTemplate;
module.exports = {

	build: function build( config, publicRoot, callback ) {

		function fetchTemplate( next ) {

			if( cachedTemplate ) { next( null, cachedTemplate ); }
			else {

				request( config.iaf.loaderTemplate, ( err, response, body ) => {

					if( err ) { next( err ); }
					else {

						var uncachedTemplate = handlebars.compile( body );
						next( null, uncachedTemplate );

					}

				} );

			}

		}

		fetchTemplate( ( err, template ) => {

			if( err ) { callback( err ); }
			else {

				callback( null, template( {

					"namespace": "rating",
					"iaf-url": config.iaf.url,
					"iaf-version": config.iaf.version,
					"partials-url": publicRoot + "/js/bundle.js"

				} ) );

			}

		} );

	}

};
