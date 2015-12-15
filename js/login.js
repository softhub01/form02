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
    template: Handlebars.compile($('#login-tpl').html()),
    events: {
        'submit .form-login': 'login'
    	},
    	login: function(e) {
 
        	// Prevent Default Submit Event
        	e.preventDefault();
 
        	// Get data from the form and put them into variables
        	var data = $(e.target).serializeArray(),
            	username = data[0].value,
            	password = data[1].value;
 
						
        	// Call Parse Login function with those variables-partially work
        	Parse.User.logIn(username, password, {
            	// If the username and password matches
            	success: function(user) {
					
					// Verified email status before user can continue to login
					// If email has been verified, proceed to welcome page
					var emailverified = Parse.User.current().get('emailVerified');
					
					//alert('your email verified status is'+ ' ' + emailverified);
					if(emailverified == true) { 
						// Continue to launch welcome page is email has been verified!
						var welcomeView = new WelcomeView({ model: user });
						welcomeView.render();
						$('.main-container').html(welcomeView.el);
					}  
					
					// If user does not verified the email, will prompt message to tell user!!!!
					if(emailverified == false) {
						alert('You have not verified your email, please check your email now, thanks!');
					}
						
            	},
            	// If there is an error such as username or password is invalid
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
	    
		var loginView = new LoginView();
		loginView.render();
		$('.main-container').html(loginView.el);		
		
		
		WelcomeView = Parse.View.extend({
        	template: Handlebars.compile($('#welcome-tpl').html()),
        	events: {
				'click .add-blog': 'add'
			},
			add: function(){
				var addBlogView = new AddBlogView();
    			addBlogView.render();
    			$('.main-container').html(addBlogView.el);
				
			},
			render: function(){
	            var attributes = this.model.toJSON();
    	        this.$el.html(this.template(attributes));
        	}
		});


	var AddBlogView = Parse.View.extend({
    	template: Handlebars.compile($('#add-tpl').html()),
    	events: {
        'submit .form-add': 'submit'
    	},
    	submit: function(e){
        // Prevent Default Submit Event     
    	e.preventDefault();
		// Take the form and put it into a data object
    	var data = $(e.target).serializeArray(),
		            	//title = data[0].value,
            	//content = data[1].value;
    	// Create a new instance of Blog
         blog = new Blog();
    	// Call .create()
    	blog.create(data[0].value, data[1].value);
    	}, 
		render: function(){
        	this.$el.html(this.template());
    	}
	});

	var Blog = Parse.Object.extend('Blog', {
    create: function(task, content) {
        this.save({
            'task': task,
            'content': content,
            'author': Parse.User.current()
    		//'authorName': Parse.User.current().get('username'),
    		//'time': new Date().toDateString(),			
			
        }, {
            success: function(blog) {
                alert('You added a new blog: ' + blog.get('task'));
            },
            error: function(blog, error) {
                console.log(blog);
                console.log(error);
            }
        });
    }
 
	});

});



 