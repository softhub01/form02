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
				console.log("Log in Error:"+error.message);
				alert("Invalid Username or Password");
			}
		});
	  });
	  
	  //=================================//
	  // Testing Section  on 29thSep2015  //
	  // Result: Tested				     //
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

				var user = results[0].get("user");
				var username = user.get("username");
				var id = results[0].id;				
				
				var fileNo =results[0].get("fileNo");
				var dateDue =results[0].get("dateDue");
				
				// Get Data from Parse for Section 1
				var pname = results[0].get("pname");
				var ptel = results[0].get("ptel");
				var vname = results[0].get("vname");
				var vtel = results[0].get("vtel");				
				var vsname = results[0].get("vsname");
				var vstel = results[0].get("vstel");
				var pbname = results[0].get("pbname");
				var pbtel = results[0].get("pbtel");
				var bbname = results[0].get("bbname");
				var bbtel = results[0].get("bbtel");
				var vbname = results[0].get("vbname");
				var vbtel = results[0].get("vbtel");				
				var dname = results[0].get("dname");
				var dtel = results[0].get("dtel");				
	
				
				// Get Data from Parse for Section2 and onwards				
				var date1 = results[0].get("date1");
				var date2 = results[0].get("date2");				
				var date3 = results[0].get("date3");
				var date4 = results[0].get("date4");
				var date5 = results[0].get("date5");
				var date6 = results[0].get("date6");
				var date7 = results[0].get("date7");
				var date8 = results[0].get("date8");
				var date9 = results[0].get("date9");
				var date10 = results[0].get("date10");
				var date11 = results[0].get("date11");
				var date12 = results[0].get("date12");				
				var date13 = results[0].get("date13");
				var date14 = results[0].get("date14");
				var date15 = results[0].get("date15");
				var date16 = results[0].get("date16");
				var date17 = results[0].get("date17");				
				var date18 = results[0].get("date18");
				var date19 = results[0].get("date19");				
				var date20 = results[0].get("date20");
				var date21 = results[0].get("date21");
				var date22 = results[0].get("date22");				
				var date23 = results[0].get("date23");
				var date24 = results[0].get("date24");				
				var date25 = results[0].get("date25");
				var date26 = results[0].get("date26");
				var date27 = results[0].get("date27");				
				var date28 = results[0].get("date28");
				var date29 = results[0].get("date29");				
				var date30 = results[0].get("date30");
				var date31 = results[0].get("date31");
				var date32 = results[0].get("date32");				
				var date33 = results[0].get("date33");
				var date34 = results[0].get("date34");				
				var date35 = results[0].get("date35");
				var date36 = results[0].get("date36");
				var date37 = results[0].get("date37");				
				var date38 = results[0].get("date38");
				var date39 = results[0].get("date39");				
				var date40 = results[0].get("date40");
				var date41 = results[0].get("date41");
				var date42 = results[0].get("date42");				
				var date43 = results[0].get("date43");
				var date44 = results[0].get("date44");				
				var date45 = results[0].get("date45");
				var date46 = results[0].get("date46");
				var date47 = results[0].get("date47");				
				var date48 = results[0].get("date48");
				var date49 = results[0].get("date49");				
				var date50 = results[0].get("date50");
				var date51 = results[0].get("date51");
				var date52 = results[0].get("date52");				
				var date53 = results[0].get("date53");
				var date54 = results[0].get("date54");				
				var date55 = results[0].get("date55");
				var date56 = results[0].get("date56");
				var date57 = results[0].get("date57");				
				var date58 = results[0].get("date58");
				var date59 = results[0].get("date59");				
				var date60 = results[0].get("date60");
				var date61 = results[0].get("date61");
				var date62 = results[0].get("date62");				
				var date63 = results[0].get("date63");
				var date64 = results[0].get("date64");				
				var date65 = results[0].get("date65");
				var date66 = results[0].get("date66");
				var date67 = results[0].get("date67");				
				var date68 = results[0].get("date68");
				var date69 = results[0].get("date69");				
				var date70 = results[0].get("date70");
				var date71 = results[0].get("date71");
				var date72 = results[0].get("date72");
				var date73 = results[0].get("date73");
				var date74 = results[0].get("date74");
				var date75 = results[0].get("date75");				
				var date76 = results[0].get("date76");
				var date77 = results[0].get("date77");				
				var date78 = results[0].get("date78");
				var date79 = results[0].get("date79");
				var date80 = results[0].get("date80");				
				var date81 = results[0].get("date81");
				var date82 = results[0].get("date82");				
				var date83 = results[0].get("date83");
				var date84 = results[0].get("date84");
				var date85 = results[0].get("date85");
				var date86 = results[0].get("date86");
				var date87 = results[0].get("date87");
				var date88 = results[0].get("date88");
				var date89 = results[0].get("date89");				
				var date90 = results[0].get("date90");
				var date91 = results[0].get("date91");				
				var date92 = results[0].get("date92");
				var date93 = results[0].get("date93");
				var date94 = results[0].get("date94");				
				var date95 = results[0].get("date95");
				var date96 = results[0].get("date96");				
				var date97 = results[0].get("date97");
				var date98 = results[0].get("date98");
				var date99 = results[0].get("date99");
				var date100 = results[0].get("date100");
			
			
				var status1 = results[0].get("status1");
				var status2 = results[0].get("status2");
				var status3 = results[0].get("status3");
				var status4 = results[0].get("status4");				
				var status5 = results[0].get("status5");
				var status6 = results[0].get("status6");
				var status7 = results[0].get("status7");
				var status8 = results[0].get("status8");				
				var status9 = results[0].get("status9");
				var status10 = results[0].get("status10");
				var status11 = results[0].get("status11");
				var status12 = results[0].get("status12");				
				var status13 = results[0].get("status13");
				var status14 = results[0].get("status14");
				var status15 = results[0].get("status15");
				var status16 = results[0].get("status16");				
				var status17 = results[0].get("status17");
				var status18 = results[0].get("status18");
				var status19 = results[0].get("status19");				
				var status20 = results[0].get("status20");
				var status21 = results[0].get("status21");
				var status22 = results[0].get("status22");
				var status23 = results[0].get("status23");				
				var status24 = results[0].get("status24");
				var status25 = results[0].get("status25");
				var status26 = results[0].get("status26");				
				var status27 = results[0].get("status27");
				var status28 = results[0].get("status28");
				var status29 = results[0].get("status29");
				var status30 = results[0].get("status30");
				var status31 = results[0].get("status31");				
				var status32 = results[0].get("status32");
				var status33 = results[0].get("status33");
				var status34 = results[0].get("status34");				
				var status35 = results[0].get("status35");				
				var status36 = results[0].get("status36");				
				var status37 = results[0].get("status37");
				var status38 = results[0].get("status38");
				var status39 = results[0].get("status39");				
				var status40 = results[0].get("status40");
				var status41 = results[0].get("status41");
				var status42 = results[0].get("status42");				
				var status43 = results[0].get("status43");				
				var status44 = results[0].get("status44");
				var status45 = results[0].get("status45");				
				var status46 = results[0].get("status46");				
				var status47 = results[0].get("status47");
				var status48 = results[0].get("status48");
				var status49 = results[0].get("status49");				
				var status50 = results[0].get("status50");				
				
				// Overall status is refer to status of last task
				var status0 = results[0].get("status50");				

				//Show data on input fields		
				document.getElementById("fileNo").value = fileNo;
				document.getElementById("dateDue").value = dateDue;				
				document.getElementById("status0").value = status0;
				
				var maxDeadline = dateDue;					

			    document.getElementById("pname").value = pname;
			    document.getElementById("ptel").value = ptel;
			    document.getElementById("vname").value = vname;
			    document.getElementById("vtel").value = vtel;
			    document.getElementById("vsname").value = vsname;
			    document.getElementById("vstel").value = vstel;
			    document.getElementById("pbname").value = pbname;
			    document.getElementById("pbtel").value = pbtel;
			    document.getElementById("bbname").value = bbname;
			    document.getElementById("bbtel").value = bbtel;
			    document.getElementById("vbname").value = vbname;
			    document.getElementById("vbtel").value = vbtel;
			    document.getElementById("dname").value = dname;
			    document.getElementById("dtel").value = dtel;				
				
			    document.getElementById("date1").value = date1;
			    document.getElementById("date2").value = date2;
			    document.getElementById("date3").value = date3;
			    document.getElementById("date4").value = date4;
			    document.getElementById("date5").value = date5;
			    document.getElementById("date6").value = date6;
			    document.getElementById("date7").value = date7;
			    document.getElementById("date8").value = date8;
			    document.getElementById("date9").value = date9;
			    document.getElementById("date10").value = date10;
			    document.getElementById("date11").value = date11;
			    document.getElementById("date12").value = date12;
			    document.getElementById("date13").value = date13;
			    document.getElementById("date14").value = date14;
			    document.getElementById("date15").value = date15;
			    document.getElementById("date16").value = date16;
			    document.getElementById("date17").value = date17;
			    document.getElementById("date18").value = date18;
			    document.getElementById("date19").value = date19;
			    document.getElementById("date20").value = date20;
			    document.getElementById("date21").value = date21;
			    document.getElementById("date22").value = date22;
			    document.getElementById("date23").value = date23;
			    document.getElementById("date24").value = date24;
			    document.getElementById("date25").value = date25;
			    document.getElementById("date26").value = date26;
			    document.getElementById("date27").value = date27;
			    document.getElementById("date28").value = date28;
			    document.getElementById("date29").value = date29;
			    document.getElementById("date30").value = date30;
			    document.getElementById("date31").value = date31;
			    document.getElementById("date32").value = date32;
			    document.getElementById("date33").value = date33;
			    document.getElementById("date34").value = date34;
			    document.getElementById("date35").value = date35;
			    document.getElementById("date36").value = date36;
			    document.getElementById("date37").value = date37;
			    document.getElementById("date38").value = date38;
			    document.getElementById("date39").value = date39;
			    document.getElementById("date40").value = date40;
			    document.getElementById("date41").value = date41;
			    document.getElementById("date42").value = date42;
			    document.getElementById("date43").value = date43;
			    document.getElementById("date44").value = date44;
			    document.getElementById("date45").value = date45;
			    document.getElementById("date46").value = date46;
			    document.getElementById("date47").value = date47;
			    document.getElementById("date48").value = date48;
			    document.getElementById("date49").value = date49;
			    document.getElementById("date50").value = date50;
			    document.getElementById("date51").value = date51;
			    document.getElementById("date52").value = date52;
			    document.getElementById("date53").value = date53;
			    document.getElementById("date54").value = date54;
			    document.getElementById("date55").value = date55;
			    document.getElementById("date56").value = date56;
			    document.getElementById("date57").value = date57;
			    document.getElementById("date58").value = date58;
			    document.getElementById("date59").value = date59;
			    document.getElementById("date60").value = date60;
			    document.getElementById("date61").value = date61;
			    document.getElementById("date62").value = date62;
			    document.getElementById("date63").value = date63;
			    document.getElementById("date64").value = date64;
			    document.getElementById("date65").value = date65;
			    document.getElementById("date66").value = date66;
			    document.getElementById("date67").value = date67;
			    document.getElementById("date68").value = date68;
			    document.getElementById("date69").value = date69;
			    document.getElementById("date70").value = date70;
			    document.getElementById("date71").value = date71;
			    document.getElementById("date72").value = date72;
			    document.getElementById("date73").value = date73;
			    document.getElementById("date74").value = date74;
			    document.getElementById("date75").value = date75;
			    document.getElementById("date76").value = date76;
			    document.getElementById("date77").value = date77;
			    document.getElementById("date78").value = date78;
			    document.getElementById("date79").value = date79;
			    document.getElementById("date80").value = date80;
			    document.getElementById("date81").value = date81;
			    document.getElementById("date82").value = date82;
			    document.getElementById("date83").value = date83;
			    document.getElementById("date84").value = date84;
			    document.getElementById("date85").value = date85;
			    document.getElementById("date86").value = date86;
			    document.getElementById("date87").value = date87;
			    document.getElementById("date88").value = date88;				
			    document.getElementById("date89").value = date89;
			    document.getElementById("date90").value = date90;
			    document.getElementById("date91").value = date91;
			    document.getElementById("date92").value = date92;
			    document.getElementById("date93").value = date93;
			    document.getElementById("date94").value = date94;
			    document.getElementById("date95").value = date95;
			    document.getElementById("date96").value = date96;
			    document.getElementById("date97").value = date97;
			    document.getElementById("date98").value = date98;
			    document.getElementById("date99").value = date99;
			    document.getElementById("date100").value = date100;			
				

			    document.getElementById("status1").value = status1;
			    document.getElementById("status2").value = status2;
			    document.getElementById("status3").value = status3;
			    document.getElementById("status4").value = status4;
			    document.getElementById("status5").value = status5;
			    document.getElementById("status6").value = status6;
			    document.getElementById("status7").value = status7;
			    document.getElementById("status8").value = status8;
			    document.getElementById("status9").value = status9;
			    document.getElementById("status10").value = status10;
			    document.getElementById("status11").value = status11;
			    document.getElementById("status12").value = status12;
			    document.getElementById("status13").value = status13;
			    document.getElementById("status14").value = status14;
			    document.getElementById("status15").value = status15;
			    document.getElementById("status16").value = status16;
			    document.getElementById("status17").value = status17;
			    document.getElementById("status18").value = status18;
			    document.getElementById("status19").value = status19;
			    document.getElementById("status20").value = status20;
			    document.getElementById("status21").value = status21;
			    document.getElementById("status22").value = status22;
			    document.getElementById("status23").value = status23;
			    document.getElementById("status24").value = status24;
			    document.getElementById("status25").value = status25;
			    document.getElementById("status26").value = status26;
			    document.getElementById("status27").value = status27;
			    document.getElementById("status28").value = status28;
			    document.getElementById("status29").value = status29;
			    document.getElementById("status30").value = status30;
			    document.getElementById("status31").value = status31;
			    document.getElementById("status32").value = status32;
			    document.getElementById("status33").value = status33;
			    document.getElementById("status34").value = status34;
			    document.getElementById("status35").value = status35;
			    document.getElementById("status36").value = status36;
			    document.getElementById("status37").value = status37;
			    document.getElementById("status38").value = status38;
			    document.getElementById("status39").value = status39;
			    document.getElementById("status40").value = status40;
			    document.getElementById("status41").value = status41;
			    document.getElementById("status42").value = status42;
			    document.getElementById("status43").value = status43;
			    document.getElementById("status44").value = status44;
			    document.getElementById("status45").value = status45;
			    document.getElementById("status46").value = status46;
			    document.getElementById("status47").value = status47;
			    document.getElementById("status48").value = status48;
			    document.getElementById("status49").value = status49;
			    document.getElementById("status50").value = status50;

			// Test - setEndDate of datepicker to equal to project Due date
			$( "#date1" ).datepicker("setEndDate", maxDeadline);
			$( "#date3" ).datepicker("setEndDate", maxDeadline);
			$( "#date5" ).datepicker("setEndDate", maxDeadline);
			$( "#date7" ).datepicker("setEndDate", maxDeadline);
			$( "#date9" ).datepicker("setEndDate", maxDeadline);
			$( "#date11" ).datepicker("setEndDate", maxDeadline);
			$( "#date13" ).datepicker("setEndDate", maxDeadline);
			$( "#date15" ).datepicker("setEndDate", maxDeadline);
			$( "#date17" ).datepicker("setEndDate", maxDeadline);
			$( "#date19" ).datepicker("setEndDate", maxDeadline);
			$( "#date21" ).datepicker("setEndDate", maxDeadline);
			$( "#date23" ).datepicker("setEndDate", maxDeadline);
			$( "#date25" ).datepicker("setEndDate", maxDeadline);
			$( "#date27" ).datepicker("setEndDate", maxDeadline);
			$( "#date29" ).datepicker("setEndDate", maxDeadline);
			$( "#date31" ).datepicker("setEndDate", maxDeadline);
			$( "#date33" ).datepicker("setEndDate", maxDeadline);
			$( "#date35" ).datepicker("setEndDate", maxDeadline);
			$( "#date37" ).datepicker("setEndDate", maxDeadline);
			$( "#date39" ).datepicker("setEndDate", maxDeadline);
			$( "#date41" ).datepicker("setEndDate", maxDeadline);
			$( "#date43" ).datepicker("setEndDate", maxDeadline);
			$( "#date45" ).datepicker("setEndDate", maxDeadline);
			$( "#date47" ).datepicker("setEndDate", maxDeadline);
			$( "#date49" ).datepicker("setEndDate", maxDeadline);
			$( "#date51" ).datepicker("setEndDate", maxDeadline);
			$( "#date53" ).datepicker("setEndDate", maxDeadline);
			$( "#date55" ).datepicker("setEndDate", maxDeadline);
			$( "#date57" ).datepicker("setEndDate", maxDeadline);
			$( "#date59" ).datepicker("setEndDate", maxDeadline);
			$( "#date61" ).datepicker("setEndDate", maxDeadline);
			$( "#date63" ).datepicker("setEndDate", maxDeadline);
			$( "#date65" ).datepicker("setEndDate", maxDeadline);
			$( "#date67" ).datepicker("setEndDate", maxDeadline);
			$( "#date69" ).datepicker("setEndDate", maxDeadline);
			$( "#date71" ).datepicker("setEndDate", maxDeadline);			
			$( "#date73" ).datepicker("setEndDate", maxDeadline);
			$( "#date75" ).datepicker("setEndDate", maxDeadline);
			$( "#date77" ).datepicker("setEndDate", maxDeadline);
			$( "#date79" ).datepicker("setEndDate", maxDeadline);
			$( "#date81" ).datepicker("setEndDate", maxDeadline);
			$( "#date83" ).datepicker("setEndDate", maxDeadline);
			$( "#date85" ).datepicker("setEndDate", maxDeadline);
			$( "#date87" ).datepicker("setEndDate", maxDeadline);				
			$( "#date89" ).datepicker("setEndDate", maxDeadline);
			$( "#date91" ).datepicker("setEndDate", maxDeadline);			
			$( "#date93" ).datepicker("setEndDate", maxDeadline);
			$( "#date95" ).datepicker("setEndDate", maxDeadline);
			$( "#date97" ).datepicker("setEndDate", maxDeadline);
			$( "#date99" ).datepicker("setEndDate", maxDeadline);


				
			},error: function(error){
				//console.log(error.message);
			}

		});
	
	  };	  
			  
	 showDetail();
	 
	// Update existing task
	function updateTask() {
		// - Important - //
	    // The fileno and formtype will not be updated as these data is always unchanged.
		//var user = Parse.User.current();
		//var username = user.get("username");
		
		var data ={};
		var id = searchID();
	

		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		
		data.dateDue = $("#dateDue").val();
		
		// Section 1
		data.pname = $("#pname").val();
		data.ptel = $("#ptel").val();
		data.vname = $("#vname").val();
		data.vtel = $("#vtel").val();
		data.vsname = $("#vsname").val();
		data.vstel = $("#vstel").val();
		data.pbname = $("#pbname").val();
		data.pbtel = $("#pbtel").val();
		data.bbname = $("#bbname").val();
		data.bbtel = $("#bbtel").val();
		data.vbname = $("#vbname").val();
		data.vbtel = $("#vbtel").val();
		data.dname = $("#dname").val();
		data.dtel = $("#dtel").val();	
					
		//Section2 and onwards
		data.date1 = $("#date1").val();
		data.date2 = $("#date2").val();
		data.date3 = $("#date3").val();
		data.date4 = $("#date4").val();
		data.date5 = $("#date5").val();
		data.date6 = $("#date6").val();
		data.date7 = $("#date7").val();
		data.date8 = $("#date8").val();
		data.date9 = $("#date9").val();
		data.date10 = $("#date10").val();
		data.date11 = $("#date11").val();
		data.date12 = $("#date12").val();
		data.date13 = $("#date13").val();
		data.date14 = $("#date14").val();
		data.date15 = $("#date15").val();
		data.date16 = $("#date16").val();
		data.date17 = $("#date17").val();
		data.date18 = $("#date18").val();
		data.date19 = $("#date19").val();
		data.date20 = $("#date20").val();
		data.date21 = $("#date21").val();
		data.date22 = $("#date22").val();
		data.date23 = $("#date23").val();
		data.date24 = $("#date24").val();
		data.date25 = $("#date25").val();
		data.date26 = $("#date26").val();
		data.date27 = $("#date27").val();
		data.date28 = $("#date28").val();
		data.date29 = $("#date29").val();
		data.date30 = $("#date30").val();
		data.date31 = $("#date31").val();
		data.date32 = $("#date32").val();
		data.date33 = $("#date33").val();
		data.date34 = $("#date34").val();
		data.date35 = $("#date35").val();
		data.date36 = $("#date36").val();
		data.date37 = $("#date37").val();
		data.date38 = $("#date38").val();
		data.date39 = $("#date39").val();
		data.date40 = $("#date40").val();
		data.date41 = $("#date41").val();
		data.date42 = $("#date42").val();
		data.date43 = $("#date43").val();
		data.date44 = $("#date44").val();
		data.date45 = $("#date45").val();
		data.date46 = $("#date46").val();
		data.date47 = $("#date47").val();
		data.date48 = $("#date48").val();
		data.date49 = $("#date49").val();
		data.date50 = $("#date50").val();
		data.date51 = $("#date51").val();
		data.date52 = $("#date52").val();
		data.date53 = $("#date53").val();
		data.date54 = $("#date54").val();
		data.date55 = $("#date55").val();
		data.date56 = $("#date56").val();
		data.date57 = $("#date57").val();
		data.date58 = $("#date58").val();
		data.date59 = $("#date59").val();
		data.date60 = $("#date60").val();
		data.date61 = $("#date61").val();
		data.date62 = $("#date62").val();
		data.date63 = $("#date63").val();
		data.date64 = $("#date64").val();
		data.date65 = $("#date65").val();
		data.date66 = $("#date66").val();
		data.date67 = $("#date67").val();
		data.date68 = $("#date68").val();
		data.date69 = $("#date69").val();
		data.date70 = $("#date70").val();
		data.date71 = $("#date71").val();
		data.date72 = $("#date72").val();
		data.date73 = $("#date73").val();
		data.date74 = $("#date74").val();
		data.date75 = $("#date75").val();
		data.date76 = $("#date76").val();
		data.date77 = $("#date77").val();
		data.date78 = $("#date78").val();
		data.date79 = $("#date79").val();
		data.date80 = $("#date80").val();
		data.date81 = $("#date81").val();
		data.date82 = $("#date82").val();
		data.date83 = $("#date83").val();
		data.date84 = $("#date84").val();
		data.date85 = $("#date85").val();
		data.date86 = $("#date86").val();
		data.date87 = $("#date87").val();
		data.date88 = $("#date88").val();
		data.date89 = $("#date89").val();
		data.date90 = $("#date90").val();
		data.date91 = $("#date91").val();
		data.date92 = $("#date92").val();
		data.date93 = $("#date93").val();
		data.date94 = $("#date94").val();
		data.date95 = $("#date95").val();
		data.date96 = $("#date96").val();
		data.date97 = $("#date97").val();
		data.date98 = $("#date98").val();
		data.date99 = $("#date99").val();
		data.date100 = $("#date100").val();			

		data.user = Parse.User.current();

		//Get today's date in string
		var todayDate = new Date();
		var m = todayDate.getMonth();
		var d = todayDate.getDate()+1;
		var y = todayDate.getFullYear();

		var todayDateText = new Date(y,m,d);
		todayDate = todayDateText.toISOString().substr(0,10);		

					//Automatic set status 1
					if(data.date1!=="" && data.date2!=="")
					{
						if(data.date1 >= data.date2)
						{	
						data.status1 = "Completed";						
						}
						else
						{
						data.status1 = "Overdue";	
						}	
					}	
					else if((data.date1!=="" && data.date2=="" && todayDate > data.date1) || (data.date1 =="" && data.date2=="" && todayDate > data.dateDue))
					{
						data.status1 = "Overdue";
					}
					else if((data.date1!=="" && data.date2=="" && todayDate == data.dateDue) || (data.date1 =="" && data.date2=="" && todayDate == data.dateDue))
					{
						data.status1 = "Due Today";
					}
					else if(data.date1 =="" && data.date2!=="" && data.dateDue >= data.date2)  
					{
						data.status1 = "Completed";
					}						
					else 
					{
						data.status1 = "In progress";
					}						
					
					//Automatic set status 2
					if(data.date3!=="" && data.date4!=="")
					{
						if(data.date3 >= data.date4)
						{	
						data.status2 = "Completed";						
						}
						else
						{
						data.status2 = "Overdue";	
						}	
					}
					else if((data.date3!=="" && data.date4=="" && todayDate > data.date3) || (data.date3 =="" && data.date4=="" && todayDate > data.dateDue))
					{
						data.status2 = "Overdue";
					}
					else if((data.date3!=="" && data.date4=="" && todayDate == data.dateDue) || (data.date3 =="" && data.date4=="" && todayDate == data.dateDue))
					{
						data.status2 = "Due Today";
					}
					else if(data.date3 =="" && data.date4!=="" && data.dateDue >= data.date4)  
					{
						data.status2 = "Completed";
					}						
					else
					{
						data.status2 = "In progress";
					}						
					
					//Automatic set status 3
					if(data.date5!=="" && data.date6!=="")
					{
						if(data.date5 >= data.date6)
						{	
						data.status3 = "Completed";						
						}
						else
						{
						data.status3 = "Overdue";	
						}	
					}
					else if((data.date5!=="" && data.date6=="" && todayDate > data.date5) || (data.date5 =="" && data.date6=="" && todayDate > data.dateDue))
					{
						data.status3 = "Overdue";
					}
					else if((data.date5!=="" && data.date6=="" && todayDate == data.dateDue) || (data.date5 =="" && data.date6=="" && todayDate == data.dateDue))
					{
						data.status3 = "Due Today";
					}
					else if(data.date5 =="" && data.date6!=="" && data.dateDue >= data.date6)  
					{
						data.status3 = "Completed";
					}						
					else
					{
						data.status3 = "In progress";
					}	
					
					//Automatic set status 4
					if(data.date7!=="" && data.date8!=="")
					{
						if(data.date7 >= data.date8)
						{	
						data.status4 = "Completed";						
						}
						else
						{
						data.status4 = "Overdue";	
						}	
					}
					else if((data.date7!=="" && data.date8=="" && todayDate > data.date7) || (data.date7 =="" && data.date8=="" && todayDate > data.dateDue))
					{
						data.status4 = "Overdue";
					}
					else if((data.date7!=="" && data.date8=="" && todayDate == data.dateDue) || (data.date7 =="" && data.date8=="" && todayDate == data.dateDue))
					{
						data.status4 = "Due Today";
					}
					else if(data.date7 =="" && data.date8!=="" && data.dateDue >= data.date8)  
					{
						data.status4 = "Completed";
					}					
					else
					{
						data.status4 = "In progress";
					}					
					
					//Automatic set status 5
					if(data.date9!=="" && data.date10!=="")
					{
						if(data.date9 >= data.date10)
						{	
						data.status5 = "Completed";						
						}
						else
						{
						data.status5 = "Overdue";	
						}	
					}
					else if((data.date9!=="" && data.date10=="" && todayDate > data.date9) || (data.date9 =="" && data.date10=="" && todayDate > data.dateDue))
					{
						data.status5 = "Overdue";
					}
					else if((data.date9!=="" && data.date10=="" && todayDate == data.dateDue) || (data.date9 =="" && data.date10=="" && todayDate == data.dateDue))
					{
						data.status5 = "Due Today";
					}
					else if(data.date9 =="" && data.date10!=="" && data.dateDue >= data.date10)  
					{
						data.status5 = "Completed";
					}					
					else
					{
						data.status5 = "In progress";
					}						
					
					
					//Automatic set status 6
					if(data.date11!=="" && data.date12!=="")
					{
						if(data.date11 >= data.date12)
						{	
						data.status6 = "Completed";						
						}
						else
						{
						data.status6 = "Overdue";	
						}	
					}
					else if((data.date11!=="" && data.date12=="" && todayDate > data.date11) || (data.date11 =="" && data.date12=="" && todayDate > data.dateDue))
					{
						data.status6 = "Overdue";
					}
					else if((data.date11!=="" && data.date12=="" && todayDate == data.dateDue) || (data.date11 =="" && data.date12=="" && todayDate == data.dateDue))
					{
						data.status6 = "Due Today";
					}
					else if(data.date11 =="" && data.date12!=="" && data.dateDue >= data.date12)  
					{
						data.status6 = "Completed";
					}					
					else
					{
						data.status6 = "In progress";
					}						
					
					
					//Automatic set status 7
					if(data.date13!=="" && data.date14!=="")
					{
						if(data.date13 >= data.date14)
						{	
						data.status7 = "Completed";						
						}
						else
						{
						data.status7 = "Overdue";	
						}	
					}
					else if((data.date13!=="" && data.date14=="" && todayDate > data.date13) || (data.date13 =="" && data.date14=="" && todayDate > data.dateDue))
					{
						data.status7 = "Overdue";
					}
					else if((data.date13!=="" && data.date14=="" && todayDate == data.dateDue) || (data.date13 =="" && data.date14=="" && todayDate == data.dateDue))
					{
						data.status7 = "Due Today";
					}
					else if(data.date13 =="" && data.date14!=="" && data.dateDue >= data.date14)  
					{
						data.status7 = "Completed";
					}					
					else
					{
						data.status7 = "In progress";
					}						
					
					//Automatic set status 8
					if(data.date15!=="" && data.date16!=="")
					{
						if(data.date15 >= data.date16)
						{	
						data.status8 = "Completed";						
						}
						else
						{
						data.status8 = "Overdue";	
						}	
					}
					else if((data.date15!=="" && data.date16=="" && todayDate > data.date15) || (data.date15 =="" && data.date16=="" && todayDate > data.dateDue))
					{
						data.status8 = "Overdue";
					}
					else if((data.date15!=="" && data.date16=="" && todayDate == data.dateDue) || (data.date15 =="" && data.date16=="" && todayDate == data.dateDue))
					{
						data.status8 = "Due Today";
					}
					else if(data.date15 =="" && data.date16!=="" && data.dateDue >= data.date16)  
					{
						data.status8 = "Completed";
					}					
					else
					{
						data.status8 = "In progress";
					}
					
					//Automatic set status 9
					if(data.date17!=="" && data.date18!=="")
					{
						if(data.date17 >= data.date18)
						{	
						data.status9 = "Completed";						
						}
						else
						{
						data.status9 = "Overdue";	
						}	
					}
					else if((data.date17!=="" && data.date18=="" && todayDate > data.date17) || (data.date17 =="" && data.date18=="" && todayDate > data.dateDue))
					{
						data.status9 = "Overdue";
					}
					else if((data.date17!=="" && data.date18=="" && todayDate == data.dateDue) || (data.date17 =="" && data.date18=="" && todayDate == data.dateDue))
					{
						data.status9 = "Due Today";
					}
					else if(data.date17 =="" && data.date18!=="" && data.dateDue >= data.date18)  
					{
						data.status9 = "Completed";
					}						
					else
					{
						data.status9 = "In progress";
					}					
					
					
					//Automatic set status 10
					if(data.date19!=="" && data.date20!=="")
					{
						if(data.date19 >= data.date20)
						{	
						data.status10 = "Completed";						
						}
						else
						{
						data.status10 = "Overdue";	
						}	
					}
					else if((data.date19!=="" && data.date20=="" && todayDate > data.date19) || (data.date19 =="" && data.date20=="" && todayDate > data.dateDue))
					{
						data.status10 = "Overdue";
					}
					else if((data.date19!=="" && data.date20=="" && todayDate == data.dateDue) || (data.date19 =="" && data.date20=="" && todayDate == data.dateDue))
					{
						data.status10 = "Due Today";
					}
					else if(data.date19 =="" && data.date20!=="" && data.dateDue >= data.date20)  
					{
						data.status10 = "Completed";
					}						
					else
					{
						data.status10 = "In progress";
					}
					

					//Automatic set status 11
					if(data.date21!=="" && data.date22!=="")
					{
						if(data.date21 >= data.date22)
						{	
						data.status11 = "Completed";						
						}
						else
						{
						data.status11 = "Overdue";	
						}	
					}
					else if((data.date21!=="" && data.date22=="" && todayDate > data.date21) || (data.date21 =="" && data.date22=="" && todayDate > data.dateDue))
					{
						data.status11 = "Overdue";
					}
					else if((data.date21!=="" && data.date22=="" && todayDate == data.dateDue) || (data.date21 =="" && data.date22=="" && todayDate == data.dateDue))
					{
						data.status11 = "Due Today";
					}
					else if(data.date21 =="" && data.date22!=="" && data.dateDue >= data.date22)  
					{
						data.status11 = "Completed";
					}						
					else
					{
						data.status11 = "In progress";
					}
					
					//Automatic set status 12
					if(data.date23!=="" && data.date24!=="")
					{
						if(data.date23 >= data.date24)
						{	
						data.status12 = "Completed";						
						}
						else
						{
						data.status12 = "Overdue";	
						}	
					}
					else if((data.date23!=="" && data.date24=="" && todayDate > data.date23) || (data.date23 =="" && data.date24=="" && todayDate > data.dateDue))
					{
						data.status12 = "Overdue";
					}
					else if((data.date23!=="" && data.date24=="" && todayDate == data.dateDue) || (data.date23 =="" && data.date24=="" && todayDate == data.dateDue))
					{
						data.status12 = "Due Today";
					}
					else if(data.date23 =="" && data.date24!=="" && data.dateDue >= data.date24)  
					{
						data.status12 = "Completed";
					}						
					else
					{
						data.status12 = "In progress";
					}					


					//Automatic set status 13
					if(data.date25!=="" && data.date26!=="")
					{
						if(data.date25 >= data.date26)
						{	
						data.status13 = "Completed";						
						}
						else
						{
						data.status13 = "Overdue";	
						}	
					}
					else if((data.date25!=="" && data.date26=="" && todayDate > data.date25) || (data.date25 =="" && data.date26=="" && todayDate > data.dateDue))
					{
						data.status13 = "Overdue";
					}
					else if((data.date25!=="" && data.date26=="" && todayDate == data.dateDue) || (data.date25 =="" && data.date26=="" && todayDate == data.dateDue))
					{
						data.status13 = "Due Today";
					}
					else if(data.date25 =="" && data.date26!=="" && data.dateDue >= data.date26)  
					{
						data.status13 = "Completed";
					}						
					else
					{
						data.status13 = "In progress";
					}	

					//Automatic set status 14
					if(data.date27!=="" && data.date28!=="")
					{
						if(data.date27 >= data.date28)
						{	
						data.status14 = "Completed";						
						}
						else
						{
						data.status14 = "Overdue";	
						}	
					}
					else if((data.date27!=="" && data.date28=="" && todayDate > data.date27) || (data.date27 =="" && data.date28=="" && todayDate > data.dateDue))
					{
						data.status14 = "Overdue";
					}
					else if((data.date27!=="" && data.date28=="" && todayDate == data.dateDue) || (data.date27 =="" && data.date28=="" && todayDate == data.dateDue))
					{
						data.status14 = "Due Today";
					}
					else if(data.date27 =="" && data.date28!=="" && data.dateDue >= data.date28)  
					{
						data.status14 = "Completed";
					}					
					else
					{
						data.status14 = "In progress";
					}	
					
					//Automatic set status 15
					if(data.date29!=="" && data.date30!=="")
					{
						if(data.date29 >= data.date30)
						{	
						data.status15 = "Completed";						
						}
						else
						{
						data.status15 = "Overdue";	
						}	
					}
					else if((data.date29!=="" && data.date30=="" && todayDate > data.date29) || (data.date29 =="" && data.date30=="" && todayDate > data.dateDue))
					{
						data.status15 = "Overdue";
					}
					else if((data.date29!=="" && data.date30=="" && todayDate == data.dateDue) || (data.date29 =="" && data.date30=="" && todayDate == data.dateDue))
					{
						data.status15 = "Due Today";
					}
					else if(data.date29 =="" && data.date30!=="" && data.dateDue >= data.date30)  
					{
						data.status15 = "Completed";
					}						
					else
					{
						data.status15 = "In progress";
					}						

					//Automatic set status 16
					if(data.date31!=="" && data.date32!=="")
					{
						if(data.date31 >= data.date32)
						{	
						data.status16 = "Completed";						
						}
						else
						{
						data.status16 = "Overdue";	
						}	
					}
					else if((data.date31!=="" && data.date32=="" && todayDate > data.date31) || (data.date31 =="" && data.date32=="" && todayDate > data.dateDue))
					{
						data.status16 = "Overdue";
					}
					else if((data.date31!=="" && data.date32=="" && todayDate == data.dateDue) || (data.date31 =="" && data.date32=="" && todayDate == data.dateDue))
					{
						data.status16 = "Due Today";
					}
					else if(data.date31 =="" && data.date32!=="" && data.dateDue >= data.date31)  
					{
						data.status16 = "Completed";
					}						
					else
					{
						data.status16 = "In progress";
					}

					//Automatic set status 17
					if(data.date33!=="" && data.date34!=="")
					{
						if(data.date33 >= data.date34)
						{	
						data.status17 = "Completed";						
						}
						else
						{
						data.status17 = "Overdue";	
						}	
					}
					else if((data.date33!=="" && data.date34=="" && todayDate > data.date33) || (data.date33 =="" && data.date34=="" && todayDate > data.dateDue))
					{
						data.status17 = "Overdue";
					}
					else if((data.date33!=="" && data.date34=="" && todayDate == data.dateDue) || (data.date33 =="" && data.date34=="" && todayDate == data.dateDue))
					{
						data.status17 = "Due Today";
					}
					else if(data.date33 =="" && data.date34!=="" && data.dateDue >= data.date33)  
					{
						data.status17 = "Completed";
					}						
					else
					{
						data.status17 = "In progress";
					}

					//Automatic set status 18
					if(data.date35!=="" && data.date36!=="")
					{
						if(data.date35 >= data.date36)
						{	
						data.status18 = "Completed";						
						}
						else
						{
						data.status18 = "Overdue";	
						}	
					}
					else if((data.date35!=="" && data.date36=="" && todayDate > data.date35) || (data.date35 =="" && data.date36=="" && todayDate > data.dateDue))
					{
						data.status18 = "Overdue";
					}
					else if((data.date35!=="" && data.date36=="" && todayDate == data.dateDue) || (data.date35 =="" && data.date36=="" && todayDate == data.dateDue))
					{
						data.status18 = "Due Today";
					}
					else if(data.date35 =="" && data.date36!=="" && data.dateDue >= data.date36)  
					{
						data.status18 = "Completed";
					}						
					else
					{
						data.status18 = "In progress";
					}					
					
					//Automatic set status 19
					if(data.date37!=="" && data.date38!=="")
					{
						if(data.date37 >= data.date38)
						{	
						data.status19 = "Completed";						
						}
						else
						{
						data.status19 = "Overdue";	
						}	
					}
					else if((data.date37!=="" && data.date38=="" && todayDate > data.date37) || (data.date37 =="" && data.date38=="" && todayDate > data.dateDue))
					{
						data.status19 = "Overdue";
					}
					else if((data.date37!=="" && data.date38=="" && todayDate == data.dateDue) || (data.date37 =="" && data.date38=="" && todayDate == data.dateDue))
					{
						data.status19 = "Due Today";
					}
					else if(data.date37 =="" && data.date38!=="" && data.dateDue >= data.date38)  
					{
						data.status19 = "Completed";
					}					
					else
					{
						data.status19 = "In progress";
					}					

					//Automatic set status 20
					if(data.date39!=="" && data.date40!=="")
					{
						if(data.date39 >= data.date40)
						{	
						data.status20 = "Completed";						
						}
						else
						{
						data.status20 = "Overdue";	
						}	
					}
					else if((data.date39!=="" && data.date40=="" && todayDate > data.date39) || (data.date39 =="" && data.date40=="" && todayDate > data.dateDue))
					{
						data.status20 = "Overdue";
					}
					else if((data.date39!=="" && data.date40=="" && todayDate == data.dateDue) || (data.date39 =="" && data.date40=="" && todayDate == data.dateDue))
					{
						data.status20 = "Due Today";
					}
					else if(data.date39 =="" && data.date40!=="" && data.dateDue >= data.date40)  
					{
						data.status20 = "Completed";
					}					
					else
					{
						data.status20 = "In progress";
					}

					//Automatic set status 21
					if(data.date41!=="" && data.date42!=="")
					{
						if(data.date41 >= data.date42)
						{	
						data.status21 = "Completed";						
						}
						else
						{
						data.status21 = "Overdue";	
						}	
					}
					else if((data.date41!=="" && data.date42=="" && todayDate > data.date41) || (data.date41 =="" && data.date42=="" && todayDate > data.dateDue))
					{
						data.status21 = "Overdue";
					}
					else if((data.date41!=="" && data.date42=="" && todayDate == data.dateDue) || (data.date41 =="" && data.date42=="" && todayDate == data.dateDue))
					{
						data.status21 = "Due Today";
					}
					else if(data.date41 =="" && data.date42!=="" && data.dateDue >= data.date42)  
					{
						data.status21 = "Completed";
					}					
					else
					{
						data.status21 = "In progress";
					}					
					
					//Automatic set status 22
					if(data.date43!=="" && data.date44!=="")
					{
						if(data.date43 >= data.date44)
						{	
						data.status22 = "Completed";						
						}
						else
						{
						data.status22 = "Overdue";	
						}	
					}
					else if((data.date43!=="" && data.date44=="" && todayDate > data.date43) || (data.date43 =="" && data.date44=="" && todayDate > data.dateDue))
					{
						data.status22 = "Overdue";
					}
					else if((data.date43!=="" && data.date44=="" && todayDate == data.dateDue) || (data.date43 =="" && data.date44=="" && todayDate == data.dateDue))
					{
						data.status22 = "Due Today";
					}
					else if(data.date43 =="" && data.date44!=="" && data.dateDue >= data.date44)  
					{
						data.status22 = "Completed";
					}					
					else
					{
						data.status22 = "In progress";
					}					
					
					//Automatic set status 23
					if(data.date45!=="" && data.date46!=="")
					{
						if(data.date45 >= data.date46)
						{	
						data.status23 = "Completed";						
						}
						else
						{
						data.status23 = "Overdue";	
						}	
					}
					else if((data.date45!=="" && data.date46=="" && todayDate > data.date45) || (data.date45 =="" && data.date46=="" && todayDate > data.dateDue))
					{
						data.status23 = "Overdue";
					}
					else if((data.date45!=="" && data.date46=="" && todayDate == data.dateDue) || (data.date45 =="" && data.date46=="" && todayDate == data.dateDue))
					{
						data.status23 = "Due Today";
					}
					else if(data.date45 =="" && data.date46!=="" && data.dateDue >= data.date46)  
					{
						data.status23 = "Completed";
					}					
					else
					{
						data.status23 = "In progress";
					}					
					
					//Automatic set status 24
					if(data.date47!=="" && data.date48!=="")
					{
						if(data.date47 >= data.date48)
						{	
						data.status24 = "Completed";						
						}
						else
						{
						data.status24 = "Overdue";	
						}	
					}
					else if((data.date47!=="" && data.date48=="" && todayDate > data.date47) || (data.date47 =="" && data.date48=="" && todayDate > data.dateDue))
					{
						data.status24 = "Overdue";
					}
					else if((data.date47!=="" && data.date48=="" && todayDate == data.dateDue) || (data.date47 =="" && data.date48=="" && todayDate == data.dateDue))
					{
						data.status24 = "Due Today";
					}
					else if(data.date47 =="" && data.date48!=="" && data.dateDue >= data.date48)  
					{
						data.status24 = "Completed";
					}						
					else
					{
						data.status24 = "In progress";
					}
					
					//Automatic set status 25
					if(data.date49!=="" && data.date50!=="")
					{
						if(data.date49 >= data.date50)
						{	
						data.status25 = "Completed";						
						}
						else
						{
						data.status25 = "Overdue";	
						}	
					}
					else if((data.date49!=="" && data.date50=="" && todayDate > data.date49) || (data.date49 =="" && data.date50=="" && todayDate > data.dateDue))
					{
						data.status25 = "Overdue";
					}
					else if((data.date49!=="" && data.date50=="" && todayDate == data.dateDue) || (data.date49 =="" && data.date50=="" && todayDate == data.dateDue))
					{
						data.status25 = "Due Today";
					}
					else if(data.date49 =="" && data.date50!=="" && data.dateDue >= data.date50)  
					{
						data.status25 = "Completed";
					}						
					else
					{
						data.status25 = "In progress";
					}

					//Automatic set status 26
					if(data.date51!=="" && data.date52!=="")
					{
						if(data.date51 >= data.date52)
						{	
						data.status26 = "Completed";						
						}
						else
						{
						data.status26 = "Overdue";	
						}	
					}
					else if((data.date51!=="" && data.date52=="" && todayDate > data.date51) || (data.date51 =="" && data.date52=="" && todayDate > data.dateDue))
					{
						data.status26 = "Overdue";
					}
					else if((data.date51!=="" && data.date52=="" && todayDate == data.dateDue) || (data.date51 =="" && data.date52=="" && todayDate == data.dateDue))
					{
						data.status26 = "Due Today";
					}
					else if(data.date51 =="" && data.date52!=="" && data.dateDue >= data.date52)  
					{
						data.status26 = "Completed";
					}						
					else
					{
						data.status26 = "In progress";
					}

					//Automatic set status 27
					if(data.date53!=="" && data.date54!=="")
					{
						if(data.date53 >= data.date54)
						{	
						data.status27 = "Completed";						
						}
						else
						{
						data.status27 = "Overdue";	
						}	
					}
					else if((data.date53!=="" && data.date54=="" && todayDate > data.date53) || (data.date53 =="" && data.date54=="" && todayDate > data.dateDue))
					{
						data.status27 = "Overdue";
					}
					else if((data.date53!=="" && data.date54=="" && todayDate == data.dateDue) || (data.date53 =="" && data.date54=="" && todayDate == data.dateDue))
					{
						data.status27 = "Due Today";
					}
					else if(data.date53 =="" && data.date54!=="" && data.dateDue >= data.date54)  
					{
						data.status27 = "Completed";
					}						
					else
					{
						data.status27 = "In progress";
					}

					//Automatic set status 28
					if(data.date55!=="" && data.date56!=="")
					{
						if(data.date55 >= data.date56)
						{	
						data.status28 = "Completed";						
						}
						else
						{
						data.status28 = "Overdue";	
						}	
					}
					else if((data.date55!=="" && data.date56=="" && todayDate > data.date55) || (data.date55 =="" && data.date56=="" && todayDate > data.dateDue))
					{
						data.status28 = "Overdue";
					}
					else if((data.date55!=="" && data.date56=="" && todayDate == data.dateDue) || (data.date55 =="" && data.date56=="" && todayDate == data.dateDue))
					{
						data.status28 = "Due Today";
					}
					else if(data.date55 =="" && data.date56!=="" && data.dateDue >= data.date56)  
					{
						data.status28 = "Completed";
					}						
					else
					{
						data.status28 = "In progress";
					}					

					//Automatic set status 29
					if(data.date57!=="" && data.date58!=="")
					{
						if(data.date57 >= data.date58)
						{	
						data.status29 = "Completed";						
						}
						else
						{
						data.status29 = "Overdue";	
						}	
					}
					else if((data.date57!=="" && data.date58=="" && todayDate > data.date57) || (data.date57 =="" && data.date58=="" && todayDate > data.dateDue))
					{
						data.status29 = "Overdue";
					}
					else if((data.date57!=="" && data.date58=="" && todayDate == data.dateDue) || (data.date57 =="" && data.date58=="" && todayDate == data.dateDue))
					{
						data.status29 = "Due Today";
					}
					else if(data.date57 =="" && data.date58!=="" && data.dateDue >= data.date58)  
					{
						data.status29 = "Completed";
					}						
					else
					{
						data.status29 = "In progress";
					}					

					//Automatic set status 30
					if(data.date59!=="" && data.date60!=="")
					{
						if(data.date59 >= data.date60)
						{	
						data.status30 = "Completed";						
						}
						else
						{
						data.status30 = "Overdue";	
						}	
					}
					else if((data.date59!=="" && data.date60=="" && todayDate > data.date59) || (data.date59 =="" && data.date60=="" && todayDate > data.dateDue))
					{
						data.status30 = "Overdue";
					}
					else if((data.date59!=="" && data.date60=="" && todayDate == data.dateDue) || (data.date59 =="" && data.date60=="" && todayDate == data.dateDue))
					{
						data.status30 = "Due Today";
					}
					else if(data.date59 =="" && data.date60!=="" && data.dateDue >= data.date60)  
					{
						data.status30 = "Completed";
					}						
					else
					{
						data.status30 = "In progress";
					}					

					//Automatic set status 31
					if(data.date61!=="" && data.date62!=="")
					{
						if(data.date61 >= data.date62)
						{	
						data.status31 = "Completed";						
						}
						else
						{
						data.status31 = "Overdue";	
						}	
					}
					else if((data.date61!=="" && data.date62=="" && todayDate > data.date61) || (data.date61 =="" && data.date62=="" && todayDate > data.dateDue))
					{
						data.status31 = "Overdue";
					}
					else if((data.date61!=="" && data.date62=="" && todayDate == data.dateDue) || (data.date61 =="" && data.date62=="" && todayDate == data.dateDue))
					{
						data.status31 = "Due Today";
					}
					else if(data.date61 =="" && data.date62!=="" && data.dateDue >= data.date62)  
					{
						data.status31 = "Completed";
					}						
					else
					{
						data.status31 = "In progress";
					}

					//Automatic set status 32
					if(data.date63!=="" && data.date64!=="")
					{
						if(data.date63 >= data.date64)
						{	
						data.status32 = "Completed";						
						}
						else
						{
						data.status32 = "Overdue";	
						}	
					}
					else if((data.date63!=="" && data.date64=="" && todayDate > data.date63) || (data.date63 =="" && data.date64=="" && todayDate > data.dateDue))
					{
						data.status32 = "Overdue";
					}
					else if((data.date63!=="" && data.date64=="" && todayDate == data.dateDue) || (data.date63 =="" && data.date64=="" && todayDate == data.dateDue))
					{
						data.status32 = "Due Today";
					}
					else if(data.date63 =="" && data.date64!=="" && data.dateDue >= data.date64)  
					{
						data.status32 = "Completed";
					}						
					else
					{
						data.status32 = "In progress";
					}

					//Automatic set status 33
					if(data.date65!=="" && data.date66!=="")
					{
						if(data.date65 >= data.date66)
						{	
						data.status33 = "Completed";						
						}
						else
						{
						data.status33 = "Overdue";	
						}	
					}
					else if((data.date65!=="" && data.date66=="" && todayDate > data.date65) || (data.date65 =="" && data.date66=="" && todayDate > data.dateDue))
					{
						data.status33 = "Overdue";
					}
					else if((data.date65!=="" && data.date66=="" && todayDate == data.dateDue) || (data.date65 =="" && data.date66=="" && todayDate == data.dateDue))
					{
						data.status33 = "Due Today";
					}
					else if(data.date65 =="" && data.date66!=="" && data.dateDue >= data.date66)  
					{
						data.status33 = "Completed";
					}						
					else
					{
						data.status33 = "In progress";
					}

					//Automatic set status 34
					if(data.date67!=="" && data.date68!=="")
					{
						if(data.date67 >= data.date68)
						{	
						data.status34 = "Completed";						
						}
						else
						{
						data.status34 = "Overdue";	
						}	
					}
					else if((data.date67!=="" && data.date68=="" && todayDate > data.date67) || (data.date67 =="" && data.date68=="" && todayDate > data.dateDue))
					{
						data.status34 = "Overdue";
					}
					else if((data.date67!=="" && data.date68=="" && todayDate == data.dateDue) || (data.date67 =="" && data.date68=="" && todayDate == data.dateDue))
					{
						data.status34 = "Due Today";
					}
					else if(data.date67 =="" && data.date68!=="" && data.dateDue >= data.date68)  
					{
						data.status34 = "Completed";
					}						
					else
					{
						data.status34 = "In progress";
					}

					//Automatic set status 35
					if(data.date69!=="" && data.date70!=="")
					{
						if(data.date69 >= data.date70)
						{	
						data.status35 = "Completed";						
						}
						else
						{
						data.status35 = "Overdue";	
						}	
					}
					else if((data.date69!=="" && data.date70=="" && todayDate > data.date69) || (data.date69 =="" && data.date70=="" && todayDate > data.dateDue))
					{
						data.status35 = "Overdue";
					}
					else if((data.date69!=="" && data.date70=="" && todayDate == data.dateDue) || (data.date69 =="" && data.date70=="" && todayDate == data.dateDue))
					{
						data.status35 = "Due Today";
					}
					else if(data.date69 =="" && data.date70!=="" && data.dateDue >= data.date70)  
					{
						data.status35 = "Completed";
					}						
					else
					{
						data.status35 = "In progress";
					}

					//Automatic set status 36
					if(data.date71!=="" && data.date72!=="")
					{
						if(data.date71 >= data.date72)
						{	
						data.status36 = "Completed";						
						}
						else
						{
						data.status36 = "Overdue";	
						}	
					}
					else if((data.date71!=="" && data.date72=="" && todayDate > data.date71) || (data.date71 =="" && data.date72=="" && todayDate > data.dateDue))
					{
						data.status36 = "Overdue";
					}
					else if((data.date71!=="" && data.date72=="" && todayDate == data.dateDue) || (data.date71 =="" && data.date72=="" && todayDate == data.dateDue))
					{
						data.status36 = "Due Today";
					}
					else if(data.date71 =="" && data.date72!=="" && data.dateDue >= data.date72)  
					{
						data.status36 = "Completed";
					}						
					else
					{
						data.status36 = "In progress";
					}
				
					//Automatic set status 37
					if(data.date73!=="" && data.date74!=="")
					{
						if(data.date73 >= data.date74)
						{	
						data.status37 = "Completed";						
						}
						else
						{
						data.status37 = "Overdue";	
						}	
					}
					else if((data.date73!=="" && data.date74=="" && todayDate > data.date73) || (data.date73 =="" && data.date74=="" && todayDate > data.dateDue))
					{
						data.status37 = "Overdue";
					}
					else if((data.date73!=="" && data.date74=="" && todayDate == data.dateDue) || (data.date73=="" && data.date74=="" && todayDate == data.dateDue))
					{
						data.status37 = "Due Today";
					}
					else if(data.date73 =="" && data.date74!=="" && data.dateDue >= data.date74)  
					{
						data.status37 = "Completed";
					}						
					else
					{
						data.status37 = "In progress";
					}		

					//Automatic set status 38
					if(data.date75!=="" && data.date76!=="")
					{
						if(data.date75 >= data.date76)
						{	
						data.status38 = "Completed";						
						}
						else
						{
						data.status38 = "Overdue";	
						}	
					}
					else if((data.date75!=="" && data.date76=="" && todayDate > data.date75) || (data.date75 =="" && data.date76=="" && todayDate > data.dateDue))
					{
						data.status38 = "Overdue";
					}
					else if((data.date75!=="" && data.date76=="" && todayDate == data.dateDue) || (data.date75 =="" && data.date76=="" && todayDate == data.dateDue))
					{
						data.status38 = "Due Today";
					}
					else if(data.date75 =="" && data.date76!=="" && data.dateDue >= data.date76)  
					{
						data.status38 = "Completed";
					}					
					else
					{
						data.status38 = "In progress";
					}

					//Automatic set status 39
					if(data.date77!=="" && data.date78!=="")
					{
						if(data.date77 >= data.date78)
						{	
						data.status39 = "Completed";						
						}
						else
						{
						data.status39 = "Overdue";	
						}	
					}
					else if((data.date77!=="" && data.date78=="" && todayDate > data.date77) || (data.date77 =="" && data.date78=="" && todayDate > data.dateDue))
					{
						data.status39 = "Overdue";
					}
					else if((data.date77!=="" && data.date78=="" && todayDate == data.dateDue) || (data.date77 =="" && data.date78=="" && todayDate == data.dateDue))
					{
						data.status39 = "Due Today";
					}
					else if(data.date77 =="" && data.date78!=="" && data.dateDue >= data.date78)  
					{
						data.status39 = "Completed";
					}					
					else
					{
						data.status39 = "In progress";
					}	

					//Automatic set status 40
					if(data.date79!=="" && data.date80!=="")
					{
						if(data.date79 >= data.date80)
						{	
						data.status40 = "Completed";						
						}
						else
						{
						data.status40 = "Overdue";	
						}	
					}
					else if((data.date79!=="" && data.date80=="" && todayDate > data.date79) || (data.date79 =="" && data.date80=="" && todayDate > data.dateDue))
					{
						data.status40 = "Overdue";
					}
					else if((data.date79!=="" && data.date80=="" && todayDate == data.dateDue) || (data.date79 =="" && data.date80=="" && todayDate == data.dateDue))
					{
						data.status40 = "Due Today";
					}
					else if(data.date79 =="" && data.date80!=="" && data.dateDue >= data.date80)  
					{
						data.status40 = "Completed";
					}					
					else
					{
						data.status40 = "In progress";
					}					
					
					
					//Automatic set status 41
					if(data.date81!=="" && data.date82!=="")
					{
						if(data.date81 >= data.date82)
						{	
						data.status41 = "Completed";						
						}
						else
						{
						data.status41 = "Overdue";	
						}	
					}
					else if((data.date81!=="" && data.date82=="" && todayDate > data.date81) || (data.date81 =="" && data.date82=="" && todayDate > data.dateDue))
					{
						data.status41 = "Overdue";
					}
					else if((data.date81!=="" && data.date82=="" && todayDate == data.dateDue) || (data.date81 =="" && data.date82=="" && todayDate == data.dateDue))
					{
						data.status41 = "Due Today";
					}
					else if(data.date81 =="" && data.date82!=="" && data.dateDue >= data.date82)  
					{
						data.status41 = "Completed";
					}					
					else
					{
						data.status41 = "In progress";
					}				

					//Automatic set status 42
					if(data.date83!=="" && data.date84!=="")
					{
						if(data.date83 >= data.date84)
						{	
						data.status42 = "Completed";						
						}
						else
						{
						data.status42 = "Overdue";	
						}	
					}
					else if((data.date83!=="" && data.date84=="" && todayDate > data.date83) || (data.date83 =="" && data.date84=="" && todayDate > data.dateDue))
					{
						data.status42 = "Overdue";
					}
					else if((data.date83!=="" && data.date84=="" && todayDate == data.dateDue) || (data.date83 =="" && data.date84=="" && todayDate == data.dateDue))
					{
						data.status42 = "Due Today";
					}
					else if(data.date83 =="" && data.date84!=="" && data.dateDue >= data.date84)  
					{
						data.status42 = "Completed";
					}					
					else
					{
						data.status42 = "In progress";
					}					

					//Automatic set status 43
					if(data.date85!=="" && data.date86!=="")
					{
						if(data.date85 >= data.date86)
						{	
						data.status43 = "Completed";						
						}
						else
						{
						data.status43 = "Overdue";	
						}	
					}
					else if((data.date85!=="" && data.date86=="" && todayDate > data.date85) || (data.date85 =="" && data.date86=="" && todayDate > data.dateDue))
					{
						data.status43 = "Overdue";
					}
					else if((data.date85!=="" && data.date86=="" && todayDate == data.dateDue) || (data.date85 =="" && data.date86=="" && todayDate == data.dateDue))
					{
						data.status43 = "Due Today";
					}
					else if(data.date85 =="" && data.date86!=="" && data.dateDue >= data.date86)  
					{
						data.status43 = "Completed";
					}					
					else
					{
						data.status43 = "In progress";
					}

					//Automatic set status 44
					if(data.date87!=="" && data.date88!=="")
					{
						if(data.date87 >= data.date88)
						{	
						data.status44 = "Completed";						
						}
						else
						{
						data.status44 = "Overdue";	
						}	
					}
					else if((data.date87!=="" && data.date88=="" && todayDate > data.date87) || (data.date87 =="" && data.date88=="" && todayDate > data.dateDue))
					{
						data.status44 = "Overdue";
					}
					else if((data.date87!=="" && data.date88=="" && todayDate == data.dateDue) || (data.date87 =="" && data.date88=="" && todayDate == data.dateDue))
					{
						data.status44 = "Due Today";
					}
					else if(data.date87 =="" && data.date88!=="" && data.dateDue >= data.date88)  
					{
						data.status44 = "Completed";
					}					
					else
					{
						data.status44 = "In progress";
					}
					
					//Automatic set status 45
					if(data.date89!=="" && data.date90!=="")
					{
						if(data.date89 >= data.date90)
						{	
						data.status45 = "Completed";						
						}
						else
						{
						data.status45 = "Overdue";	
						}	
					}
					else if((data.date89!=="" && data.date90=="" && todayDate > data.date89) || (data.date89 =="" && data.date90=="" && todayDate > data.dateDue))
					{
						data.status45 = "Overdue";
					}
					else if((data.date89!=="" && data.date90=="" && todayDate == data.dateDue) || (data.date89 =="" && data.date90=="" && todayDate == data.dateDue))
					{
						data.status45 = "Due Today";
					}
					else if(data.date89 =="" && data.date90!=="" && data.dateDue >= data.date90)  
					{
						data.status45 = "Completed";
					}					
					else
					{
						data.status45 = "In progress";
					}					
					
					//Automatic set status 46
					if(data.date91!=="" && data.date92!=="")
					{
						if(data.date91 >= data.date92)
						{	
						data.status46 = "Completed";						
						}
						else
						{
						data.status46 = "Overdue";	
						}	
					}
					else if((data.date91!=="" && data.date92=="" && todayDate > data.date91) || (data.date91 =="" && data.date92=="" && todayDate > data.dateDue))
					{
						data.status46 = "Overdue";
					}
					else if((data.date91!=="" && data.date92=="" && todayDate == data.dateDue) || (data.date91 =="" && data.date92=="" && todayDate == data.dateDue))
					{
						data.status46 = "Due Today";
					}
					else if(data.date91 =="" && data.date92!=="" && data.dateDue >= data.date92)  
					{
						data.status46 = "Completed";
					}					
					else
					{
						data.status46 = "In progress";
					}					
					
					//Automatic set status 47
					if(data.date93!=="" && data.date94!=="")
					{
						if(data.date93 >= data.date94)
						{	
						data.status47 = "Completed";						
						}
						else
						{
						data.status47 = "Overdue";	
						}	
					}
					else if((data.date93!=="" && data.date94=="" && todayDate > data.date93) || (data.date93 =="" && data.date94=="" && todayDate > data.dateDue))
					{
						data.status47 = "Overdue";
					}
					else if((data.date93!=="" && data.date94=="" && todayDate == data.dateDue) || (data.date93 =="" && data.date94=="" && todayDate == data.dateDue))
					{
						data.status47 = "Due Today";
					}
					else if(data.date93 =="" && data.date94!=="" && data.dateDue >= data.date94)  
					{
						data.status47 = "Completed";
					}					
					else
					{
						data.status47 = "In progress";
					}					

					//Automatic set status 48
					if(data.date95!=="" && data.date96!=="")
					{
						if(data.date95 >= data.date96)
						{	
						data.status48 = "Completed";						
						}
						else
						{
						data.status48 = "Overdue";	
						}	
					}
					else if((data.date95!=="" && data.date96=="" && todayDate > data.date95) || (data.date95 =="" && data.date96=="" && todayDate > data.dateDue))
					{
						data.status48 = "Overdue";
					}
					else if((data.date95!=="" && data.date96=="" && todayDate == data.dateDue) || (data.date95 =="" && data.date96=="" && todayDate == data.dateDue))
					{
						data.status48 = "Due Today";
					}
					else if(data.date95 =="" && data.date96!=="" && data.dateDue >= data.date96)  
					{
						data.status48 = "Completed";
					}					
					else
					{
						data.status48 = "In progress";
					}	

					//Automatic set status 49
					if(data.date97!=="" && data.date98!=="")
					{
						if(data.date97 >= data.date98)
						{	
						data.status49 = "Completed";						
						}
						else
						{
						data.status49 = "Overdue";	
						}	
					}
					else if((data.date97!=="" && data.date98=="" && todayDate > data.date97) || (data.date97 =="" && data.date98=="" && todayDate > data.dateDue))
					{
						data.status49 = "Overdue";
					}
					else if((data.date97!=="" && data.date98=="" && todayDate == data.dateDue) || (data.date97 =="" && data.date98=="" && todayDate == data.dateDue))
					{
						data.status49 = "Due Today";
					}
					else if(data.date97 =="" && data.date98!=="" && data.dateDue >= data.date98)  
					{
						data.status49 = "Completed";
					}					
					else
					{
						data.status49 = "In progress";
					}	

					//Automatic set status 50
					if(data.date99!=="" && data.date100!=="")
					{
						if(data.date99 >= data.date100)
						{	
						data.status50 = "Completed";						
						}
						else
						{
						data.status50 = "Overdue";	
						}	
					}
					else if((data.date99!=="" && data.date100=="" && todayDate > data.date99) || (data.date99 =="" && data.date100=="" && todayDate > data.dateDue))
					{
						data.status50 = "Overdue";
					}
					else if((data.date99!=="" && data.date100=="" && todayDate == data.dateDue) || (data.date99 =="" && data.date100=="" && todayDate == data.dateDue))
					{
						data.status50 = "Due Today";
					}
					else if(data.date99 =="" && data.date100!=="" && data.dateDue >= data.date100)  
					{
						data.status50 = "Completed";
					}					
					else
					{
						data.status50 = "In progress";
					}						
					
					
					data.status0 = data.status50;

					
					/* Previous script of reading data from input field 
		
		data.status1 = document.getElementById("status1").value;
		data.status2 = document.getElementById("status2").value;
		data.status3 = document.getElementById("status3").value;
		data.status4 = document.getElementById("status4").value;
		data.status5 = document.getElementById("status5").value;
		data.status6 = document.getElementById("status6").value;
		data.status7 = document.getElementById("status7").value;
		data.status8 = document.getElementById("status8").value;
		data.status9 = document.getElementById("status9").value;
		data.status10 = document.getElementById("status10").value;
		data.status11 = document.getElementById("status11").value;
		data.status12 = document.getElementById("status12").value;
		data.status13 = document.getElementById("status13").value;
		data.status14 = document.getElementById("status14").value;
		data.status15 = document.getElementById("status15").value;
		data.status16 = document.getElementById("status16").value;
		data.status17 = document.getElementById("status17").value;
		data.status18 = document.getElementById("status18").value;
		data.status19 = document.getElementById("status19").value;
		data.status20 = document.getElementById("status20").value;
		data.status21 = document.getElementById("status21").value;
		data.status22 = document.getElementById("status22").value;
		data.status23 = document.getElementById("status23").value;
		data.status24 = document.getElementById("status24").value;
		data.status25 = document.getElementById("status25").value;
		data.status26 = document.getElementById("status26").value;
		data.status27 = document.getElementById("status27").value;
		data.status28 = document.getElementById("status28").value;
		data.status29 = document.getElementById("status29").value;
		data.status30 = document.getElementById("status30").value;
		data.status31 = document.getElementById("status31").value;
		data.status32 = document.getElementById("status32").value;
		data.status33 = document.getElementById("status33").value;
		data.status34 = document.getElementById("status34").value;
		data.status35 = document.getElementById("status35").value;
		data.status36 = document.getElementById("status36").value;
		data.status37 = document.getElementById("status37").value;
		data.status38 = document.getElementById("status38").value;
		data.status39 = document.getElementById("status39").value;
		data.status40 = document.getElementById("status40").value;
		data.status41 = document.getElementById("status41").value;
		data.status42 = document.getElementById("status42").value;
		data.status43 = document.getElementById("status43").value;
		data.status44 = document.getElementById("status44").value;
		data.status45 = document.getElementById("status45").value;
		data.status46 = document.getElementById("status46").value;
		data.status47 = document.getElementById("status47").value;
		data.status48 = document.getElementById("status48").value;
		data.status49 = document.getElementById("status49").value;
		data.status50 = document.getElementById("status50").value;		
		*/
		
		
		query.equalTo("objectId", id);
            query.first({
                //match the key values from the form and then save it
				success: function (Form01) {
                         Form01.save(data, {
                         success: function (form01) {
 				
							//form01.set("date1",date1);			
							//form01.set("date2",date2);
							//form01.set("status1",status1);

                            // form01.save();
                            alert("Thanks, your file: "+fileNo+" has been updated successfully!");
							window.location = "task-list.html";								
                         },
						 	error: function(form01, error){
							alert('Failed to Update!');
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


	