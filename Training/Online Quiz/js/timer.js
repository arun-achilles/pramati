function initiator(){
	var time = 30;
	timer = setInterval(function() {
		myTimer(time--)
		}, 1000);
	build_question();
	
}

function myTimer(time) {
	if(time>=0){
		$("#timer").html(time--);
	}
	else {
		answer_validation();
	}
}

function build_question(){
	$("#question").html(questions[question_number].question);
	$("#option_a").html(questions[question_number].options.a);
	$("#option_b").html(questions[question_number].options.b);
	$("#option_c").html(questions[question_number].options.c);
	$("#option_d").html(questions[question_number].options.d);

	$("#submit").show();
	$("#next").hide();
	option_unblock();
	option_uncheck();
		
}

function answer_validation(){
	$("#submit").hide();
	total_questions--;
	clearInterval(timer);
	option_block();

	if($('input[name=correctAnswer]:checked').val()==questions[question_number].correct_answer){
		correct_answer();
	}
	else {
		wrong_modal();
	}
}

function correct_answer(){
	amount_won+=1000;
	if(total_questions==0){
		game_over();
		millionaire_modal("Million");
	}
	else {
		question_number++;
		$("#next").show();
<<<<<<< HEAD
		$('#current_amount').html(amount_won);
=======
>>>>>>> 0ed48d6b045f6185e3d8bab096296bb0d072c3d4
		success_modal(amount_won);
	}
}

function quitter(){
	game_over();
	game_over_modal(amount_won);
}

function game_over(){
		$("#next").hide();
		$("#quit").hide();
		$("#submit").hide();
		$("#start").show();
<<<<<<< HEAD
		$("#question").html("Click Start");
		$("#option_a").html("");
		$("#option_b").html("");
		$("#option_c").html("");
		$("#option_d").html("");
		$('#current_amount').html("");
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

=======
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

>>>>>>> 0ed48d6b045f6185e3d8bab096296bb0d072c3d4
function success_modal(money){
	$("#modal_header").html("Hurray!");
	$("#modal_body").html("Congratualations! You have won");
	$("#amount").html(money);
	$("#modal").modal();

}

function wrong_modal(money){
	$("#modal_header").html("Ooops");
	$("#modal_body").html("Sorry..Wrong answer");
	$("#amount").html("");
	$("#modal").modal();
}

function game_over_modal(money){
	$("#modal_header").html("You lost the Biggest Chance");
	$("#modal_body").html("GAME OVER !! The amount you have won is");
	$("#amount").html(money);
	$("#modal").modal();
}

function millionaire_modal(money){
	$("#modal_header").html("Winner Winner Chicken Dinner");
	$("#modal_body").html("You have entered into the list of Millionaire!");
	$("#amount").html(money);
	$("#modal").modal();
}


$(document).ready(function() {
	$("#next").hide();
	$("#submit").hide();
	$("#quit").hide();

	$("#start").on('click',function(){
		amount_won = 0;
		total_questions = 6;
		question_number = 0;
		initiator();
		$("#start").hide();
		$("#submit").show();
		$("#quit").show();
		
	});

	$("#next").on('click',function(){
		initiator();
	});

	$("#submit").on('click',function(){
		answer_validation();
	});

	$("#quit").on('click',function(){
		clearInterval(timer);
		quitter();
	});
<<<<<<< HEAD

	$('#a').on('click',function(){
		$("#a_radio").prop("checked", true);
	});

	$('#b').on('click',function(){
		$("#b_radio").prop("checked", true);
	})

	$('#c').on('click',function(){
		$("#c_radio").prop("checked", true);
	})

	$('#d').on('click',function(){
		$("#d_radio").prop("checked", true);
	})
=======
>>>>>>> 0ed48d6b045f6185e3d8bab096296bb0d072c3d4

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
},{
	question_index:6,
	question:"World's best music director",
	options :{
		a:"AR rahman",
		b:"Hans zimmer",
		c:"Beethoven",
		d:"James Horner"
	},
	correct_answer:'b'
}
];

