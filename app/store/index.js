/*eslint-env node*/

var quotes = {};
var uuid = require( "../utils/uuid" );

module.exports = {

	quotes: {

		put: function( quote ) {

			if( !quote ) { throw new Error( "No quote" ); }
			var id = quote.id = quote.id || uuid();
			quotes[ id ] = JSON.parse( JSON.stringify( quote ) );
			return id;

		},
		get: function( quoteId ) {

			return quotes[ quoteId ];

		},
		list: function( transform ) {

			transform = transform || ( x => x.id );
			return Object.keys( quotes ).map( id => transform( quotes[ id ] ) );

		}

	}

};
