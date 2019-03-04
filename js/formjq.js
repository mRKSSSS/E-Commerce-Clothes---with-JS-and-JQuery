$(document).ready(function(){
    
    //Form Variables Declaration
    var nameValidation = false;
    var nameValidationText = "Name Validation Error: ";
    var emailValidation = false;
    var emailValidationText = "E-Mail Validation Error: ";
    var messageValidation = false;
    var messageValidationText = "Message Validation Error: ";

    //Function to reset form variables
    function resetFormVars(){
        nameValidation = false;
        nameValidationText = "Name Validation Error: ";
        emailValidation = false;
        emailValidationText = "E-Mail Validation Error: ";
        messageValidation = false;
        messageValidationText = "Message Validation Error: ";
    };

    //Function for Email validation with Regex
    function regexValidateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    //Prevent form submit by default
    $('#form').submit(function(e){
        e.preventDefault();
    });

    //Submit Form Click Event
    $('.submit').click(function(){

        //Name Input Field Manual Validation
        if($('.name').val().length < 1){
            nameValidationText += "Name must not be empty. ";
        }else{
            nameValidation = true;
        }

        //Email Input Field Manual Validation
        if($('.email').val().length < 1){
            emailValidationText += "Email must not be empty. ";
        }
        else if(!regexValidateEmail($('.email').val())){
            emailValidationText += "Email must be correctly entered. ";
        }else{
            emailValidation = true;
        }

        //Message Input Field Manual Validation
        if($('.message').val().length < 1){
            messageValidationText += "Message must not be empty. ";
        }else{
            messageValidation = true;
        }

        //If condition to show errors or submit the form
        if(nameValidation === false || emailValidation === false || messageValidation === false){
            alert(nameValidationText + "\n" + emailValidationText + "\n" + messageValidationText);
            resetFormVars();
        }else{
            alert("Formulário Submetido com Sucesso!");
            $('.name').val("");
            $('.email').val("");
            $('.message').val("");
            resetFormVars();
        }
    });
});