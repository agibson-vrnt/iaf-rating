/*eslint-env node*/

var partials = require( "./public/js/bundle.js" ).default;

module.exports = ( req, res, next ) => {

    res.renderPartialPage = ( partialName, partialModel, viewOptions ) => {

        viewOptions = viewOptions || {};
        var partial = res.renderPartial( partialName, partialModel, viewOptions.partialId );
        viewOptions.model = Object.assign( {}, viewOptions.model, { partial: partial } );
        viewOptions.view = viewOptions.view || "partial-page";
        res.render( viewOptions.view, viewOptions.model );

    };
    res.renderPartial = ( partialName, partialModel, partialId ) => {

        partialId = partialId || "iaf565656565";
        var partial = partials[ partialName ];
        var iaf = global.iaf.rating.iaf;
        if( !partial ) { throw new Error( "Unable to find partial view " + partialName ); }
        var element = iaf.React.createElement( partial, partialModel );
        return {

            name: partialName,
            id: partialId,
            html: iaf.ReactServer.renderToString( element ),
            js: "iaf.rating.bootstrapPartial( \"Main\", \"#" + partialId + "\" );"

        };

    };
    next();

};
