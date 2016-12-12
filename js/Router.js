define( function( require ) {
    /**
     * This will be the generic router, used primarily to 
     * choose the proper module
     */
    var Marionette = require( 'marionette' ),
        HeaderView = require( 'view/Header' ),
        AppInstance;
    
    return Marionette.AppRouter.extend( {

        appRoutes: {
            
            '*path': 'homePage'
            
        },
        
        onRoute: function() {
            AppInstance = require( 'AppInstance' );
            AppInstance.regionHeader.show( new HeaderView() );
        }
        
    } );
} );