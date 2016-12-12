define( function( require ) {

    var Backbone = require( 'backbone' );
    
    return Backbone.View.extend( {
      
        tagName: 'h1',
        
        render: function() {
            return this;
        }
        
    } );
    
} );