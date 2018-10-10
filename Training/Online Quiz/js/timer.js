function initiator(){
	timer = setInterval(function() {
  		myTimer()
			}, 1000);
	var d = 20;

	function myTimer() {
		if(d>=0){
  		document.getElementById("timer").innerHTML = d--;
  		}
  		else{
  			answer_validation();
  			clearInterval(timer);
  			if(total_questions!=0){
  				total_questions--;
  			}else{
  				alert("Quiz over");
  			}
  			
  		}
	}
}
 function build_question(){

 		$("#question").html(questions[question_number].question);
 		$("#option_a").html(questions[question_number].options.a);
 		$("#option_b").html(questions[question_number].options.b);
 		$("#option_c").html(questions[question_number].options.c);
 		$("#option_d").html(questions[question_number].options.d);
 		
 }

 function answer_validation(){
 		if($('input[name=correctAnswer]:checked').val()==questions[question_number].correct_answer)
 			{
 				alert("success");
 				//$("#myModal").modal();
 			}else{
 				alert("Wrong");
 			}
 			question_number++;
 }

 function option_block(){
 		$(':radio').attr('disabled', true);
 }
 function option_unblock(){
 		$(':radio').attr('disabled', false);
 }
 function option_uncheck(){
 		$(':radio').prop('checked', false);
 }

$(document).ready(function() {
	$("#start").on('click',function(){
		//alert("started");
		//$("#myModal").modal();
		total_questions = 5;
		question_number = 0;
		build_question();
		option_unblock();
		option_uncheck();
		initiator();
		
	});

	$("#next").on('click',function(){
		if(total_questions!=0){
		total_questions--;
		clearInterval(timer);
		option_uncheck();
		option_unblock();
		build_question();
		initiator();
		}else{
			clearInterval(timer);
  			alert("Quiz over");
		}
	});

	$("#submit").on('click',function(){
		option_block();
		clearInterval(timer);
		answer_validation();
		
	});


	/*if(total_questions==0){
		clearInterval(timer);
		alert("Quiz over");
	}*/

});


//Question Array

questions = [{
	question_index:1,
	question:"Which among the following is a language",
	options :{
		a:"Rails",
		b:"Django",
		c:"Scala",
		d:"Node Js"
	},
	correct_answer:'c'
},
{
	question_index:2,
	question:"Which one is the tallest",
	options :{
		a:"Quitib Minar",
		b:"Burj Khalifa",
		c:"Anna Arch",
		d:"Pyramid"
	},
	correct_answer:'b'
},
{
	question_index:3,
	question:"Which of these planets has a solid surface?",
	options :{
		a:"Mars",
		b:"Saturn",
		c:"Jupiter",
		d:"Uranus"
	},
	correct_answer:'a'
},
{
	question_index:4,
	question:"The International Literacy Day is observed on",
	options :{
		a:"Mar 10",
		b:"Oct 22",
		c:"Sep 18",
		d:"Dec 25"
	},
	correct_answer:'c'
},{
	question_index:5,
	question:"Which of these viruses takes it's name from a place in Malaysia?",
	options :{
		a:"Nipah",
		b:"Ebola",
		c:"Influenza",
		d:"HIV"
	},
	correct_answer:'c'
}];

