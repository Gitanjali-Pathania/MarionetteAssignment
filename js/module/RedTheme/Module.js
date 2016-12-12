define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        RedThemeRouter = require( 'module/RedTheme/Router' );
    
    return Marionette.Module.extend( {
 
        initialize: function() {
            // Assign the router
            this.Router = new RedThemeRouter( );
        }
        
    } );
} );