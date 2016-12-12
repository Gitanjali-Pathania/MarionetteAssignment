define( function( require ) {
    
    var Marionette = require( 'marionette' ),
        RedThemeHeaderView = require( 'module/RedTheme/View/Header' ),
        RedThemeController = require( 'module/RedTheme/Controller' ),
        AppInstace;
    
    return Marionette.AppRouter.extend( {
        
        
        appRoutes: {
            'signUp': 'SignUpNow'  
        },
        
        _getController: function() {
            return new RedThemeController();
        },
        
        onRoute: function() {
            AppInstace = require( 'AppInstance' );
            AppInstace.regionHeader.show( new RedThemeHeaderView() );
        }
    } );
    
} );