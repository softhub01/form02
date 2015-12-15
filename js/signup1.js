/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
	


	var LoginView = Parse.View.extend({
    template: Handlebars.compile($('#login-tpl').html()),
    events: {
        'submit .form-signin': 'login'
    	},
    	login: function(e) {
 
        	// Prevent Default Submit Event
        	e.preventDefault();
 
        	// Get data from the form and put them into variables
        	var data = $(e.target).serializeArray(),
            	username = data[0].value,
            	password = data[1].value;
				email = data[2].value;
 
        	// Call Parse Login function with those variables
        	//Parse.User.logIn(username, password, {
            	// If the username and password matches
            	//success: function(user) {
                	//var welcomeView = new WelcomeView({ model: user });
    				//welcomeView.render();
    				//$('.main-container').html(welcomeView.el);

            	//},
				
			// My Parse signup test script with email field added
			Parse.User.signUp(username, password, email, { ACL: new Parse.ACL() }, {
        		success: function(user) {
				alert('Sign up successfully');
				var welcomeView = new WelcomeView({ model: user });
    			welcomeView.render();
    			$('.main-container').html(welcomeView.el);
				},
				
            	// If there is an error
            	error: function(user, error) {
               	console.log(error);
				alert('Invalid Username or Password!');
            	}
        	});
    	},
        	render: function(){
        	this.$el.html(this.template());
    	}
	})
	    
		// This part will render loginView to display correctly, or else, the webpage will display blank.
		var loginView = new LoginView();
		loginView.render();
		$('.main-container').html(loginView.el);		
		
		
		WelcomeView = Parse.View.extend({
        	template: Handlebars.compile($('#welcome-tpl').html()),
			render: function(){
	            var attributes = this.model.toJSON();
    	        this.$el.html(this.template(attributes));
        	}
		});
});
