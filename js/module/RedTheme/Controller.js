define( function( require ) {

    var Marionette = require( 'marionette' ),
        DefaultView = require( 'module/RedTheme/View/Default' ),
        AppInstance;
    
    return Marionette.Controller.extend( {
        
        SignUpNow: function() {
            var defaultView = new DefaultView();
            AppInstance = require( 'AppInstance' );
            
            AppInstance.regionMain.show( defaultView );
        }
        
    } );
    
} );