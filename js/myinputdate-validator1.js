/*!
 Javascript for datepicker input restriction -
 1) Task "Deadline Date" is not allowed to greater than "Project Due Date";
 2) Task "Completed Date" cannot be greater than today date.
 */

$(document).ready(function () {
	$( "#dateDue" ).datepicker({
		autoclose: true 
		}).on('changeDate', function(event){
        var maxDeadline = new Date(event.date);
		
		// Test script
		// maxDeadline.setDate(maxDeadline.getDate() );
        //$( "#date1" ).datepicker("setStartDate", event.date);

		$( "#date1" ).datepicker({autoclose: true} "setEndDate", maxDeadline);		
		});

		$( "#date2" ).datepicker({ endDate: 'today'}); 


    };



 