/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

//$(function() {
 
    //Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    // old parse key: Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
 
	Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");	
	
	//Create new object and tell them where to save data
	var Blog = Parse.Object.extend('Blog');
	blog = new Blog();
    var data= {};
	//var fileNo;
	
//	function changeValueCheckbox(status1){
//		if(status1.checked){
//			status1.value="on";
//		}else{
//			status1.value="off";
//		}
//	}
	
//	changeValueCheckbox(status1);
	
	function producePrompt(message, promptLocation, color){
		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = message;
	}
	
	// Update existing task
	function updateTask() {

				var user = Parse.User.current();
				var username = user.get("username");
				var id = results[0].id;
	
		//changeValueCheckbox(status1);
		//var query = new Parse.Query(Blog);
		//var fileNo = $("#fileNo").val();
		var data ={};

					
					data.date1 = $("#date1").val();
					data.date2 = $("#date2").val();

					//data.user = Parse.User.current();

					var status1=$("#status1").val();
					//if($("#status1").val() == "on"){
					if(status1.checked){
						data.status1 = true;
					}
					else{
						data.status1 = false;
					}
				
				
					//match the key values from the form and then save it
					blog.save(data,{
				
						// if successful
						success: function(blog){
							alert("Thanks, your file: "+data.fileNo+" has been saved successfullu!");
						},
						error: function(blog, error){
							alert('Failed to Save!');
							console.log(error);
						}
					})

		//});

	}
	
	
	// Check whether file no has existed before saved!!!
	$("#task-form").submit(function(event){
			// Prevent Default Submit Event
        	event.preventDefault();
	
			//Update New Data;
			updateTask();
	})
    	
//});
