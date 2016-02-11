/*eslint-env node*/

var request = require( "request" );
var vm = require( "vm" );

module.exports = {

    fetch: ( app, config, callback ) => {

        request( config.iaf.serverUrl, ( err, response, body ) => {

            var sandbox = {};
            var success = vm.runInNewContext( body, sandbox );
            if( !success ) { throw new Error( "Failed to evaluate iaf script" ); }
            var iaf = sandbox.default;
            global.iaf = { };
            global.iaf[ config.ns ] = { iaf: iaf };
            callback();

        } );

    }

};
