/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");
	

	
	var LoginView = Parse.View.extend({
    template: Handlebars.compile($('#resetpwd-tpl').html()),
    events: {
        'submit .form-resetpwd': 'reset'
    	},
    	reset: function(e) {
 
        	// Prevent Default Submit Event
        	e.preventDefault();
 
        	// Get data from the form and put them into variables

			var self=this;
			var email=this.$("[name=email]").val();
			
			// Test script to reset password
			//function resetPassword(){
			   	//var email = document.forms["form-login"]["email"].value;
			if(email==="") return;
			
				Parse.User.requestPasswordReset(email, {
					success:function() {
                    window.alert("Password reset link has been sent to "+ email);
					//$('.main-container').html(welcomeView.el);
					
                    return true;
					},
					error:function(error) {
                    window.alert(error.message);
                    return false;
					}
				});
			
			
			       	
    	},
        	render: function(){
        	this.$el.html(this.template());
			}
	})
	    
		var loginView = new LoginView();
		loginView.render();
		$('.main-container').html(loginView.el);


	//});

});



 