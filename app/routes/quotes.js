/*eslint-env node*/
var store = require( "../store" );
var bodyParser = require( "body-parser" );

const APP_JSON = "application/json";
const TEXT_HTML = "text/html";

function renderAddQuote( req, res ) {

    var partialModel = req.body || {};
    partialModel.catalogue = store.catalogue.retrieve();
    req.negotiate(

        [ TEXT_HTML, () => res.renderPartialPage( "AddAQuote", partialModel, { model: { title: "Prepare a quote" } } ) ]

    );

}

function hydrateQuote( quote, dateToText ) {

    if( !quote ) { return quote; }
    quote.when = new Date( quote.when );
    if( dateToText ) { quote.when = quote.when.toDateString(); }
    return quote;

}
module.exports = {

    configure: ( app ) => {

        app.use( "/quotes", bodyParser.json() );
        app.use( "/quotes", bodyParser.urlencoded() );

        app.get( "/quotes", ( req, res ) => {

            req.negotiate(

                [ TEXT_HTML, () => res.renderPartialPage(

                    "ListQuotes",
                    { quotes: { created: store.quotes.list( x => hydrateQuote( x, true ) ) } },
                    { view: "quotes", "model": { title: "Your quotes" } }

                ) ],
                [ APP_JSON, () => res.send( store.quotes.list() ) ]

            );

        } );

        app.get( "/quotes/add", ( req, res ) => {

            renderAddQuote( req, res );

        } );

        app.post( "/quotes/add", ( req, res ) => {

            var isReady = req.body.term && req.body.product;
            if( !isReady ) {

                renderAddQuote( req, res );

            } else {

                var renderInvalid = () => req.negotiate(

                    [ TEXT_HTML, () => res.render( "Error" ) ],
                    [ APP_JSON, () => res.status( 400 ).send( "Parameters are invalid" ) ]

                );
                var quote = {};
                var catalogue = store.catalogue.retrieve();
                var product = catalogue.find( x => x.value === req.body.product );
                if( !product ) { renderInvalid(); return; }
                var term = product.terms.find( x => x.value === req.body.term );
                if( !term ) { renderInvalid(); return; }
                quote.product = {

                    id: product.value,
                    text: product.text

                };
                quote.term = {

                    id: term.value,
                    text: term.text

                };
                quote.price = ( Math.random() * 400 ).toFixed( 2 );
                var id = store.quotes.put( quote );
                req.negotiate(

                    [ TEXT_HTML, () => res.redirect( "/quotes/retrieve/" + id) ],
                    [ APP_JSON, () => res.status( 201 ).set( { "location": "/quotes/retrieve/" + id } ).send( "ok" ) ]

                );

            }

        } );

        app.get( "/quotes/retrieve/:id", (req, res ) => {

            var quote = store.quotes.get( req.params.id );
            req.negotiate(

                [ TEXT_HTML, () => res.renderPartialPage(

                    "RetrieveQuote",
                    { quote: hydrateQuote( quote ) },
                    { view: "retrieve-quote", model: { title: "Your quote" } }

                ) ],
                [ APP_JSON, () => res.send( quote ) ]

            );

        } );

        app.get( "/quotes/retrieve/:id/delete", ( req, res ) => {

            var quote = store.quotes.get( req.params.id );
            req.negotiate(

                [ TEXT_HTML, () => res.renderPartialPage(

                    "DeleteQuote",
                    { quote: hydrateQuote( quote ) },
                    { model: { title: "Your quote" } }

                ) ]

            );

        } );

        app.post( "/quotes/retrieve/:id/delete", ( req, res ) => {

            store.quotes.remove( req.params.id );
            req.negotiate(

                [ TEXT_HTML, () => res.redirect( req.url ) ]

            );

        } );

    }

};
