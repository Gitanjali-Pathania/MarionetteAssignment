define( function( require ) {
    
    var Backbone = require( 'backbone' );
    var Handlebars= require( 'Handlebars' );

    return Backbone.View.extend( {
        events:{
            'click #submitSignup':'submitSignupFun'
        },
        submitSignupFun:function(){
                                var self=this;
                                var email=document.getElementById('inputEmail1').value,
                                    password=document.getElementById('inputPassword1').value,
                                    confirm_password=document.getElementById('confirmPassword1').value,
                                    signUpData={"email": email,"password": password,"confirm_password": confirm_password};
                                if(password===confirm_password){
                                              $.ajax({
                                              type: "POST",
                                              url: "https://frontend-challenge-2.herokuapp.com/register/",
                                              data: signUpData,
                                              dataType: 'json',
                                              success: function(response){
                                                localStorage.setItem("Authorization", response.token);
                                                alert('SignUp Successful! Login Now');
                                                document.getElementById('inputEmail1').value='';
                                                document.getElementById('inputPassword1').value='';
                                                document.getElementById('confirmPassword1').value='';
                                                $('#dateId').datetimepicker();
                                              },
                                              error:function(err){
                                                alert("SignUp Failed!")
                                              }
                                            });
                                }
        },
        render: function() {
            var template= Handlebars.compile('<div class="container"><div class="card card-container"><img id="profile-img" class="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" /><p id="profile-name" class="profile-name-card"></p><span id="reauth-email" class="reauth-email"></span><input type="email" id="inputEmail1" class="form-control" placeholder="Email address" required autofocus><input type="password" id="inputPassword1" class="form-control" placeholder="Password" required><input type="password" id="confirmPassword1" class="form-control" placeholder=" Confirm Password" required><button class="btn btn-lg btn-primary btn-block btn-signin" type="submit" id="submitSignup">Sign Up</button></div></div>');
            this.$el.append(template);
            return this;
        }
        
    } );
    
} );