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
				$(".dob").on('focus', function() {
					hide_error($(this));
				});
		
	//NAME Validation
    			$(".name").keyup(function() {
					$('.name').css('textTransform', 'capitalize');
	
					var is_name=$(this).val();
					if(name_validation(is_name)){
						name_validator=0;
						hide_error($(this));
					}
					else{
						name_validator=1;
						show_error($(this));
					}
				});

	//EMAIL VALIDATION
				$('.contact_email').on('input', function() {
				var email_input=$(this);
				if(email_validation(email_input.val())){
					email_validator=0;
					hide_error($(this));
					}
				else{
					email_validator=1;
					show_error($(this));
				}
				});
			
				
	//Mobile Validation
				$('.contact_mobile').on('input',function() {
					var mobile=$(this);
				if (mobile_number_validation(mobile.val())) {
					mobile_validator=0;
					hide_error($(this));
				}
				else {mobile_validator=1;
					show_error($(this));
				}
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
			if(first_name=="")
				$("#firstname_error").show();
			if(last_name=="")
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
				$("#user_form").trigger("reset");
		}else{
			//alert("Please check if all the fields are entered properly");
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

//Validating Functions

	function email_validation(email){
		var email_regex = /^[A-Za-z][A-Za-z0-9._%+-]{0,63}@(?:[A-Za-z0-9-]{1,10}\.){1,125}[A-Za-z]{2,5}$/;
		var is_email=email_regex.test(email);
		if(is_email)
			return true;
		else
			return false;
	}
	function mobile_number_validation(mobilenumber){
		var mobile_regex = /^([6-9]+[\d]{9}){1}?$/;
		var is_mobile=mobile_regex.test(mobilenumber);
		if(is_mobile)
			return true;
		else
			return false;

	}
	function name_validation(name){
		var name_regex = /^[A-Za-z]{3,50}/;
		if(name_regex.test(name))
			return true;
		else
			return false;
		
	}

//error functions

	function show_error(object){
		object.parent().find($(".error")).show();
	}

	function hide_error(object){
		object.parent().find($(".error")).hide();
	}
