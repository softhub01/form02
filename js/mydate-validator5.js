/*!
 Javascript for datepicker input restriction -
 1) Task "Deadline Date" is not allowed to greater than "Project Due Date";
 2) Task "Completed Date" cannot be greater than today date.
 */


$(document).ready(function () {

	$( "#date1" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date3" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date5" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date7" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date9" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date11" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date13" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date15" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date17" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date19" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date21" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date23" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date25" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date27" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date29" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date31" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date33" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date35" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date37" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date39" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date41" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	
	$( "#dateDue" ).datepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		todayHighlight: true
		}).on('changeDate', function(event){
			var maxDeadline = new Date(event.date);
		
			// Test script
			// maxDeadline.setDate(maxDeadline.getDate() );
			//$( "#date1" ).datepicker("setStartDate", event.date);

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
			
		});

		$( "#date2" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date4" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date6" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date8" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date10" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date12" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date14" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date16" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date18" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date20" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date22" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date24" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date26" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date28" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date30" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date32" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date34" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date36" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date38" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date40" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date42" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
			
				
});



 