define( function( require ) {

    var Marionette = require( 'marionette' ),
        Backbone = require( 'backbone' ),
        Router = require( 'Router' ),
        Handlebars = require( 'Handlebars' ),
        datetimepicker = require( 'datetimepicker'),
        Controller = require( 'Controller' ),
        NavigationView = require( 'view/Navigation' ),
        RedThemeModule = require( 'module/RedTheme/Module' );
    
    return Marionette.Application.extend( {
        
        regions: function() {
            return {
                
                regionHeader: 'header',
                
                regionNav: 'nav',
                
                regionMain: 'section',
                
                regionFooter: 'footer'
                
            };
        },
        
        
        start: function( options ) {
            var navigationView = new NavigationView();
            
            // Perform the default 'start' functionality
            Marionette.Application.prototype.start.apply( this, [ options ] );     
            
            // Add in the site navigation
            this.regionNav.show( navigationView );
            
            // Add routers
            this.Router = new Router( { controller: new Controller() } );

            this.module( 'RedThemeModule', { moduleClass: RedThemeModule } );
            
            Backbone.history.start( );
            
        }

    } );
    
} );