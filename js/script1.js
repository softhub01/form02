/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
$(function() {
 
    Parse.$ = jQuery;

	  Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");
	  
	  //Create new parse object for where you want to save the data in the form
	  var Form01 = Parse.Object.extend("Form01");
	  

	  
	  // Check who is currently login
	  function checkLogin() {
		if(Parse.User.current()) {
			//console.log("Logged in! "+Parse.User.current().get("username"));
			$("#current-user").html("Welcome! User: "+Parse.User.current().get("username"));
		} else {
			// if nobody is login, show blank
			$("#current-user").html("");
		}
	  }
	  
	  checkLogin();
	  
	  // As this is not a form, so we can't use submit and we can just use click 
	  $("#logout").click(function(event){
		Parse.User.logOut();
		checkLogin();
	  });
	  
	  // As this is inside a form, so we can use submit over here
	  $("#login").submit(function(event){
		event.preventDefault();
		
		var name = $("#login-name").val();
		var pass = $("#login-password").val();
	  
		Parse.User.logIn(name,pass,{
			success: function(){
				//console.log("Log in Success!");
				checkLogin();
				//window.location = "task-options.html";
			},error: function(user, error){
				console.log("Log in Error:"+error.message);
			}
		});
	  });
	  
	  $("#signup").submit(function(event){
			event.preventDefault();
			
			var name = $("#signup-name").val();
			var pass = $("#signup-password").val();
			var email = $("#signup-email").val();
			
			var user = new Parse.User();
			user.set("username", name);
			user.set("password", pass);
			user.set("email", email)
			
			user.signUp(null, {
				success: function(user){
					// We call checkLogin here as signUp automatically login while the first successful signUp 
					// checkLogin();
					alert("Successful! Thank you.")
				},error: function(user, error){
					console.log("signup error:"+error.message);
					alert("Username already being sign-up, please try another!")
				}	 
			});
		});

});	
	