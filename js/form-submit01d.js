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

	// Code to prompt message during validate file no
	function producePrompt(message, promptLocation, color){
		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = message;
	}
	
	// Validate code for file no input field
	function validateFileNo() {
		var query = new Parse.Query(Blog);
		var fileNo = $("#fileNo").val();
		query.equalTo("fileNo", fileNo);
		
		query.count({
			success: function(results){
				//alert("There are :"+results+" of "+fileNo+" stored previously.\nPlease try another file no!");
				if(results == 0){
					producePrompt("OK!", "commentfileNo", "green");
					return true;
				} else{
					producePrompt("This file No. already exists!", "commentfileNo", "red");
					return false;
				}
				
			},error: function(error){
				console.log(error.message);
			}
		});

	}	
	
	
	
	function checkfileno() {

		var query = new Parse.Query(Blog);
		var fileNo = $("#fileNo").val();
		var data ={};
		
		query.equalTo("fileNo", fileNo);
		query.include("user");
		
		
		
		query.count({
			success: function(results){
				if(results == 0) {

					alert("There is "+results+" record.");
					data.fileNo = $("#fileNo").val();
					
					data.date1 = $("#date1").val();
					data.date2 = $("#date2").val();
					data.date3 = $("#date3").val();
					data.date4 = $("#date4").val();

					data.user = Parse.User.current();

					data.status1 = document.getElementById("status1").checked;
					data.status2 = document.getElementById("status2").checked;				
					//match the key values from the form and then save it
					blog.save(data,{
				
						// if successful
						success: function(blog){
							alert("Thanks, your file: "+data.fileNo+" has been saved successfully!");
						},
						error: function(blog, error){
							alert('Failed to Save!');
							console.log(error);
						}
					})
					
					
				} else {
					alert("There are :"+results+" of "+fileNo+" stored previously.\nPlease try another file no!");
					return false;
				}
				
			},error: function(error){
				console.log(error.message);
				
			}
		});

	}
	
	
	// Check whether file no has existed before saved!!!
	$("#task-form").submit(function(event){
			// Prevent Default Submit Event
        	event.preventDefault();
	
			//changeValueCheckbox(status1);
			checkfileno();
	})
    	
//});
