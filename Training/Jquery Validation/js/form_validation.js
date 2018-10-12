$(document).ready(function() {

	name_regex = /^[A-Za-z]{1}[A-Za-z\s]+$/;
	email_regex = /^[A-Za-z][A-Za-z0-9._%+-]{0,63}@(?:[A-Za-z0-9-]{1,10}\.){1,125}[A-Za-z]{2,5}$/;
	mobile_regex = /^([6-9]+[\d]{9}){1}?$/;
	dob_validator = 0;
	fields_empty = 0;
	name_validator = 0;
	email_validator = 0;
	mobile_validator = 0;

	$(".dob").datepicker({
		format: 'mm-dd-yyyy',
		minDate: new Date('1900, 1 - 1, 1'),
		maxDate: '-1d',
		onClose: function(date) {
			dob_validation(date, $(this));
		},
		autoclose: true
	});
	//NAME Validation
	$(".name").on('input', function() {
		var name = $(this);
		name_validator = regex_checker(name, name_regex, "Name");
	});
	//EMAIL VALIDATION
	$('.contact_email').on('input', function() {
		var email = $(this);
		email_validator = regex_checker(email, email_regex, "Email ID");
	});				
	//Mobile Validation
	$('.contact_mobile').on('input',function() {
		var mobile = $(this);
		mobile_validator = regex_checker(mobile, mobile_regex, "Mobile Number");
	});
						
});
	//INSERTION	
function Insert() {
	var first_name = $("#first_name").val();
	var last_name = $("#last_name").val();
	var dob = $("#dob").val();
	var email = $("#contact_email").val();
	var mobile = $("#contact_mobile").val();
	if(first_name==""||last_name==""||dob==""||email==""||mobile==""){
		fields_empty = 1;
		empty_validation();
		} else {
			fields_empty = 0;
		}
	if(name_validator==0&&email_validator==0&&mobile_validator==0&&dob_validator==0&&fields_empty==0)
		build_data(first_name,last_name,email,dob,mobile);
}

function empty_validation(){
	$('#user_form input').each(function() {
    if ($(this).val() < 1) {
      var error_name = $(this).attr('name');
      $(this).parent().find('span').text(error_name + "  cannot be blank");
    }
  });
}

function build_data(first_name,last_name,email,dob,mobile){
	first_name = capitalizeName($("#first_name").val());
	last_name = capitalizeName($("#last_name").val());
	var row = "<tr><td>" + first_name + "</td><td>" + last_name + "</td><td>" + email + "</td><td>" + mobile + "</td><td>" + dob + "</td></tr>";
		$("#contact tbody").append(row);
		$("#user_form").trigger("reset");
}

function dob_validation(date, object){
	if(new Date(date) < new Date(01/01/1900) || new Date(date) > new Date()){
		object.parent().find($(".error")).text("Date should be between 1900-present");
		dob_validator = 1;
	} else {
		object.parent().find($(".error")).text("");
		dob_validator = 0;
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
//regex checker
function regex_checker(object, regex, error_field){
	if(regex.test(object.val())){
		object.parent().find($(".error")).text("");
		return 0;
	} 
	else {
		object.parent().find($(".error")).text("Invalid "+error_field);
		return 1;
	}
}
//error functions
/*function show_error(object){
	object.parent().find($(".error")).show();
}

function hide_error(object){
	object.parent().find($(".error")).hide();
}*/

/*function shows_error(object, flag){
	flag = 1
	object.parent().find($(".error")).show();
	return flag
}

function hides_error(object, flag){
	flag = 0
	object.parent().find($(".error")).hide();
	return flag
}
*/
//Validating Functions

/*function email_validation(email){
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
	var name_regex = /^[A-Za-z][A-Za-z]{2,60}$/;
	if(name_regex.test(name))
		return true;
	else
		return false;
	
}*/