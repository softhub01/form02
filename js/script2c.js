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
		form01 = new Form01();
	
		
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
				//console.log("Log in Error:"+error.message);
				alert("Invalid Username or Password");
			}
		});
	  });
	  
	  //=================================//
	  // Testing Section  on 29thSep2015  //
	  // Result: ???				     //
	  //================================//
	  
	  
	  // Show editable form detail from link
	  
	  function searchID(){
		var id = window.location.search.split("task=")[1];
		return id;
	  }
	  searchID();

	  
	  function showDetail(){
		

	  	var id = searchID();
				
		var query = new Parse.Query(Form01);
		query.equalTo("objectId", id);
		query.include("user");
		query.find({
			success: function(results){
				//console.log(results[0].get("title"));

				var formtype =results[0].get("formtype");
				var fileNo =results[0].get("fileNo");
				var date1 = results[0].get("date1");
				var date2 = results[0].get("date2");
			
				var status1 = results[0].get("status1");

				var user = results[0].get("user");
				var username = user.get("username");
				var id = results[0].id;
		//Show data on input fields		
				document.getElementById("fileNo").value = fileNo;
			    document.getElementById("date1").value = date1;
			    document.getElementById("date2").value = date2;
			    document.getElementById("status1").checked = status1;
				
			},error: function(error){
				//console.log(error.message);
			}

		});
	
	  };	  
			  
	 showDetail();
	 
	// Update existing task
	function updateTask() {

		var user = Parse.User.current();
		var username = user.get("username");
		var id = searchID();
	

		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
					
		var date1 = $("#date1").val();
		var date2 = $("#date2").val();

		var status1=document.getElementById("status1").checked;
		
		query.equalTo("objectId", id);
            query.first({
                //match the key values from the form and then save it
				success: function (Form01) {
                         Form01.save(null, {
                         success: function (form01) {
                           		form01.set("date1",date1);			
								form01.set("date2",date2);
								form01.set("status1",status1);

                                form01.save();
                                alert("Thanks, your file: "+fileNo+" has been updated successfully!");
                         },
						 	error: function(form01, error){
							alert('Failed to Save!');
							console.log(error);
						}
						 
                        }); //form01.save()

                        }
                       });


		//});

	};
	
	
	// Check whether file no has existed before saved!!!
	$("#task-form").submit(function(event){
			// Prevent Default Submit Event
        	event.preventDefault();
	
			//Update New Data;
			updateTask();
	});
	 
	 
	 
	 
	 
});


	