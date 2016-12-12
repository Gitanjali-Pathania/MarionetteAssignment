require.config( {


    paths: {

        jquery: '../bower_components/jquery/dist/jquery.min',

        underscore: '../bower_components/underscore/underscore',

        backbone: '../bower_components/backbone/backbone',

        marionette: '../bower_components/marionette/lib/backbone.marionette' ,

        Handlebars: '../bower_components/handlebars-v4.0.5',

        moment: '../bower_components/moment',

        datetimepicker: '../bower_components/bootstrap-datetimepicker.min'
        
    },


    shim: {

        jquery: {
            exports: '$',
        },

        Handlebars: {
            exports: 'Handlebars',
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            deps: [ 'underscore', 'jquery' ],
            exports: 'Backbone'
        },

        marionette : {
            deps: [ 'jquery', 'underscore', 'backbone' ],
            exports: 'Marionette'
        }
        
    },
    
    baseURL: '/js'


});


require(
    [ 'AppInstance' ],
    
    function ( app ) {
        app.start();        
    }
);
