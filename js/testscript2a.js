/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
 $(function() {
 
    Parse.$ = jQuery;
 
	  Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");
	  
	  //Create new parse object for where you want to save the data in the form
	  var Blog = Parse.Object.extend("Blog");
  
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
		window.location = "login.html";
	  });
	  
	  // As this is inside a form, so we can use submit over here
	  $("#login").submit(function(event){
		event.preventDefault();
		
		var name = $("#login-name").val();
		var pass = $("#login-password").val();
		

		Parse.User.logIn(name,pass,{
			success: function(){
				
				// Verified email status before user can continue to login
				// If email has been verified, proceed to welcome page
				var emailverified = Parse.User.current().get('emailVerified');
					
				//alert('your email verified status is'+ ' ' + emailverified);
				if(emailverified == true) { 
					// Continue to launch welcome page is email has been verified!
					//checkLogin();
					alert("Login Successfully!");
					window.location = "mainpage.html";
					}  
					
					// If user does not verified the email, will prompt message to tell user!!!!
					else {
						alert('You have not verified your email, please check your email now, thanks!');
					}
				
			},error: function(user, error){
				console.log("Log in Error:"+error.message);
				alert("Invalid Username or Password");
			}
		});
	  });
	  


    
	  
	  
	  
	  //=================================//
	  // Section Tested on 29thSep2015  //
	  // Result: It's working well!     //
	  //================================//
	  
	  // Create function for getting object from Parse
	  function getTasks() {
		var query = new Parse.Query(Blog);
		
		query.equalTo("user", Parse.User.current());
		
		// This will include the entire object if this is a pointer
		query.include("user");
		
		query.descending("createdAt");
		
		query.find({
			success: function(results){
				var output = "";
				for (var i in results) {
					var formtype = results[i].get("formtype");
					var fileNo = results[i].get("fileNo");
					var date1 = results[i].get("date1");
					var date2 = results[i].get("date2");
					//var status1 = results[i].get("status1");

					var user = results[i].get("user");
					var username = user.get("username");
					// This is special and we don't need to use get
					var id =results[i].id

					//Print results below the page
					output += "<li>";
					//output += "<input type="hidden" id="formtype" value=""+formtype+"">";
					output += "<h3><a href='"+id+"'>"+fileNo+"</a></h3>";
					output += "<p> Date of Deadline: "+date1+"</p>";
					output += "<p> Date of Completion: "+date2+"</p>";
					output += "<p>created by: "+username+"</p>";
					output += "</li>";
				}	
				$("#list-tasks").html(output);	
				
			}, error: function(){
				//console.log("Query Error:"+error.message);
			}
		});
	  }
	  
	  getTasks();
	  
	  
	  //=================================//
	  // Testing Section  on 29thSep2015  //
	  // Result: Tested				     //
	  //================================//
	  
	  // Click on task list will redirect to task detail page
	  $("#list-tasks").on("click","a", function(event){
		event.preventDefault();
		
	  	var id = $(this).attr("href");
		
		var query = new Parse.Query(Blog);
		query.equalTo("objectId", id);
		query.find({
			success: function(result){

				var formtype =result[0].get("formtype");		
				var url = "testupdate.html?task="+encodeURIComponent(id);
				alert(url);
				window.location.href = url;

			},error: function(error){
				//console.log(error.message);
			}
		});	
			
			
       });
  
});


	