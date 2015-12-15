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
	var Form01 = Parse.Object.extend('Form01');
	form01 = new Form01();
    var data= {};

	// Code to prompt message during validate file no
	function producePrompt(message, promptLocation, color){
		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = message;
	}
	
	// Validate code for file no input field
	function validateFileNo() {
		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		query.equalTo("fileNo", fileNo);
		
		query.count({
			success: function(results){
				//alert("There are :"+results+" of "+fileNo+" stored previously.\nPlease try another file no!");
				if(results == 0){
					producePrompt("OK!", "commentfileNo", "green");
					return true;
				} else{
					producePrompt("This File No. already exists!", "commentfileNo", "red");
					return false;
				}
				
			},error: function(error){
				console.log(error.message);
			}
		});

	}	
	
	
	
	function checkfileno() {

		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		var data ={};
		
		query.equalTo("fileNo", fileNo);
		query.include("user");
		
		
		
		query.count({
			success: function(results){
				if(results == 0) {

					alert("There is "+results+" record.");
					
					// Save Form Type
					data.formtype = document.getElementById("formtype").value;
				
			
					data.fileNo = $("#fileNo").val();
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

					data.user = Parse.User.current();
					
					//Get today's date in string
					var todayDate = new Date();
					var m = todayDate.getMonth();
					var d = todayDate.getDate()+1;
					var y = todayDate.getFullYear();

					var todayDateText = new Date(y,m,d);
					todayDate = todayDateText.toISOString().substr(0,10);
					//test script - alert(todayDate+" - - "+data.date1);
					

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
				
					data.status0 = data.status36;					
					
					
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

					*/
					

					
					//match the key values from the form and then save it
					form01.save(data,{
				
						// if successful
						success: function(form01){
							// alert("Thanks, your file: "+data.fileNo+" has been saved successfully!");
							window.location = "successpage1.html";
						},
						error: function(form01, error){
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
