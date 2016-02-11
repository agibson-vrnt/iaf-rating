module.exports = {

	configure: ( app, config ) => {

		app.get( "/partials/:partialName", ( req, res ) => {

			res.renderPartialPage( req.params.partialName );

		} );

	}

};
