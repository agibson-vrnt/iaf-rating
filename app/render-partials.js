/*eslint-env node*/

var partials = require( "./public/js/bundle.js" ).default;

module.exports = ( req, res, next ) => {

    var renderView = res.render.bind( res );
    res.render = ( partialName, partialModel, viewOptions ) => {

        var partial = partials[ partialName ];
        var iaf = global.iaf.rating.iaf;
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

};
