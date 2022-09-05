var name1Error = document.getElementById('name1-error');
var name2Error = document.getElementById('name2-error');
var ageError = document.getElementById('age-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');

// ----------Validation for First name
function validateName1(){
    var firstName = document.getElementById('name1').value;

    // If the name is less then 0 letters return false
    // Flickr makes no rules about numbers 
    if(firstName.length == 0){
        name1Error.innerHTML = 'Required';
        return false;
    }else{
        name1Error.innerHTML = '';
        return true;
        // This removes the error msg, if valid input is provided
    }
}

// ----------Validation for Last name
function validateName2(){
    var lastName = document.getElementById('name2').value;

    // If the name is less then 0 letters return false
    // Flickr makes no rules about numbers 
    if(lastName.length == 0){
        name2Error.innerHTML = 'Required';
        return false;
    }else{
        name2Error.innerHTML = '';
        return true;
    }
}

// ----------Validation for Age
function validateAge(){
    var yourAge = document.getElementById('age').value;

    // User has to enter an age
    if(yourAge.length == 0){
        ageError.innerHTML = 'Required';
        return false;
    }

    // The age must be over 13
    if(isNaN(yourAge) || yourAge < 13){
        ageError.innerHTML = 'In order to use Flickr, you must be 13 or older';
        return false;
    }else{
        ageError.innerHTML = '';
        return true; 
    }
    // Age can't be more then 3 numbers and no letters
    // Max length set in html
}

// ----------Validation for Email
function validateEmail(){
    var yourEmail = document.getElementById('email').value;
    console.log(yourEmail);

    // User has to enter an email
    if(yourEmail.length == 0){
        emailError.innerHTML = 'Required';
        return false;
    }

    // Check if it's an email
    reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!reg.test(yourEmail)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }else{
        emailError.innerHTML = '';
        return true;
    }
}

// ----------Validation for Password
function validatePassword(){
    var yourPassword = document.getElementById('password').value;

    // User has to enter a password
    if(yourPassword.length == 0){
        passwordError.innerHTML = 'Required';
        return false;
    }else{
        passwordError.innerHTML = '';
        return true;
    }

    // Password must be more the 12 characters
    if(yourPassword.length < 12){
        passwordError.innerHTML = 'Please use at least 12 characters';
        return false;
    }

}