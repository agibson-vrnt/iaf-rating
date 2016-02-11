/*eslint-env node*/
var store = require( "../store" );

const APP_JSON = "application/json";
const TEXT_HTML = "text/html";

module.exports = {

    configure: ( app ) => {

        app.get( "/quotes", ( req, res ) => {

            req.negotiate(

                [ TEXT_HTML, () => res.render( "quotes", { quotes: store.quotes.list() } ) ],
                [ APP_JSON, () => { throw new Error( "Not implemented" ); } ]

            );

        } );

        app.get( "/quotes/add", ( req, res ) => {

            req.negotiate(

                [ TEXT_HTML, () => res.renderPartialPage( "AddAQuote", null, { model: { title: "Add a quote" } } ) ]

            );

        } );

    }

};
