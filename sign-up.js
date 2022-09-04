var name1Error = document.getElementById('name1-error');
var name2Error = document.getElementById('name2-error');
var ageError = document.getElementById('age-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');

// Validation for First name
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

// Validation for Last name
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