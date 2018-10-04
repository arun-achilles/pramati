$(document).ready(function() {
	flag=0;
	name_validator=0;
	email_validator=0;
	mobile_validator=0;
				$("#dob").datepicker({
					format: 'mm-dd-yyyy',
					endDate: '-1d',
					autoclose: true
				});
				
	//DOB Validation
				$("#dob").on('focus', function() {
					$("#dob_error").hide();
				});
	
	
	//NAME Validation
    			$(".name").keyup(function() {
					$('.name').css('textTransform', 'capitalize');
				});
				$(".name").on('blur', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name){$("#lastname_error").hide();}
					else{name_validator=1;$("#lastname_error").show();}
				});
				$(".name").on('focus', function() {
					name_validator=0;
					$("#lastname_error").hide();
				});

	//EMAIL VALIDATION
				$('.contact_email').on('blur', function() {
				var email_input=$(this);
				var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				var is_email=email_regex.test(email_input.val());
				if(is_email){
					$("#email_error").hide();
					input.removeClass("invalid").addClass("valid");
					}
				else{email_validator=1;
					$("#email_error").show();}
					input.removeClass("valid").addClass("invalid");
				});
				$('#contact_email').on('focus', function() {
					email_validator=0;
					$("#email_error").hide();
				});
				
	//Mobile Validation
				$('.contact_mobile').on('blur',function() {
					var mobile=$(this);
					var re = /^([6-9]+[\d]{9})?$/;
					var is_mobile=re.test(mobile.val());
					if (is_mobile) {
						$("#mobile_error").hide();
						input.removeClass("invalid").addClass("valid");
					}
					else {mobile_validator=1;
						$("#mobile_error").show();
						input.removeClass("valid").addClass("invalid");
					}
				});
				$('#contact_mobile').on('focus', function() {
					mobile_validator=0;
					$("#mobile_error").hide();
				});
				
			
	});
	//INSERTION
	
	function Insert(){
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var dob = $("#dob").val();
		var email = $("#contact_email").val();
		var mobile = $("#contact_mobile").val();
		//alert("fname-"+first_name+"lname-"+last_name+"dob-"+dob+"email-"+email);
		if(first_name==""||last_name==""||dob==""||email==""||mobile==""){
			flag=1;
			if(first_name==""||last_name=="")
				$("#lastname_error").show();
			if(dob=="")
				$("#dob_error").show();
			if(email=="")
				$("#email_error").show();
			if(mobile=="")
				$("#mobile_error").show();
		}else{
			flag=0;
		}
		if(name_validator==0&&email_validator==0&&mobile_validator==0&&flag==0){
			first_name = capitalizeName($("#first_name").val());
			last_name = capitalizeName($("#last_name").val());
			var row = "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + mobile + "</td></tr>";
				$("#contact tbody").append(row);
				$("#user_form").reset();
		}else{
			alert("Please check if all the fields are entered properly");
		}
	}
	function capitalizeName(str) {
		str = str.split(" ");
		for (var i = 0, x = str.length; i < x; i++) {
			str[i] = str[i][0].toUpperCase() + str[i].substr(1);
		}
		str = str.join(" ");
		return str;
	}


