define( function( require ) {
    /**
     * Header for the main application
     */
    
    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
        
        tagName: 'h1',

        render: function() {
            return this;
        }
    } );
} );