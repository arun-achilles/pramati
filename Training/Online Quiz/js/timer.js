function initiator(){
	timer = setInterval(function() {
  		myTimer()
			}, 1000);
	var d = 5;

	function myTimer() {
		if(d>=0){
  		document.getElementById("demo").innerHTML = d--;
  		}
  		else{
  			if(total_questions!=0){
  			total_questions--;
  			d=5;
  			}else{
  			clearInterval(timer);
  			alert("Quiz over");
  			}
  			
  		}
	}
}
 function build_question(){

 }

$(document).ready(function() {
	$("#start").on('click',function(){
		//alert("started");
		total_questions = 3;
		initiator();
	});

	$("#next").on('click',function(){
		//alert("started");
		if(total_questions!=0){
		total_questions--;
		clearInterval(timer);
		initiator();
		}else{
			clearInterval(timer);
  			alert("Quiz over");
		}
	});

	/*if(total_questions==0){
		clearInterval(timer);
		alert("Quiz over");
	}*/

});


//Question Array
var questions = [{
	question_index:001,
	question:"",
	options :{
		1:a,
		2:b,
		3:c,
		4:d
	},
	correct_answer:1
},
{
	question_index:002,
	question:"",
	options :{
		1:a,
		2:b,
		3:c,
		4:d
	},
	correct_answer:1
},
{
	question_index:003,
	question:"",
	options :{
		1:a,
		2:b,
		3:c,
		4:d
	},
	correct_answer:1
},
{
	question_index:004,
	question:"",
	options :{
		1:a,
		2:b,
		3:c,
		4:d
	},
	correct_answer:1
},{
	question_index:005,
	question:"",
	options :{
		1:a,
		2:b,
		3:c,
		4:d
	},
	correct_answer:1
}];

function email_validation(email){
	var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=email_regex.test(email_input.val());
	if(is_email)
		return true;
	else
		return false;
}
function mobile_number_validation(mobilenumber){
	var mobile_regex = /^([6-9]+[\d]{9})?$/;
	var is_mobile=mobile_regex.test(mobilenumber);
	if(is_mobile)
		return true;
	else
		return false;

}
