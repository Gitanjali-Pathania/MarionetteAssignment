define( function( require ) {
    /**
     *  This view will draw the nav menu...
     */
    
    var Backbone = require( 'backbone' ),
        _ = require( 'underscore' ),
        AppInstance;
    
    return Backbone.View.extend( {
        
        tagName: 'ul',

        events: function() {
            return {
                'click a': 'onAnchorClick'
            }
        },
        
        render: function() {
            
            var template = _.template( '<li><a href="<%= url %>"><%= label %></a></li>' ),
                links = [
                    { url: '#', label: 'Login' },
                    { url: '#signUp', label: 'Sign Up' }
                ];
            
            _.each( 
                links,
                function( link ) {
                    this.$el.append( template( link ) );
                },
                this
            );
            
            return this;
        },

        onAnchorClick: function( event ) {
            // May not be compatible with older IE versions
            var href = event.currentTarget.href,
                hash = '#' + _.last( href.split( '#' ) );
            
            AppInstance = require( 'AppInstance' );
            AppInstance.Router.navigate( hash, { trigger: true } );
            
            // returning false cancels the event
            return false;
        }
        
    } );
    
} );