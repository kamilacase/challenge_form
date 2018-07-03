$(document).ready(function() {
    $("#checkAge")

    $("#firstname")
    $("#lastname")
    $("#country")
    function checkPassword(password){

        var validPass = password.length > 6;
        var oneOrMoreUppercass = false;
        var twoOrMoreFigures = 0;
        if(validPass){
            for (let char of password) {

                if (parseInt(char) >=0){
                    twoOrMoreFigures++;
                    console.log(twoOrMoreFigures);
                }else if (char === char.toUpperCase()) {
                    oneOrMoreUppercass = true;
                    console.log(oneOrMoreUppercass);
                }
            }
            validPass = oneOrMoreUppercass;
            validPass &= twoOrMoreFigures >= 2;
        }
        return validPass;
    }

    $("#password").keyup(function(event) {
        var validPass = checkPassword($("#password").val())
        console.log(validPass);
        if(validPass){
            $("#password").removeClass("is-invalid").addClass("is-valid");
            $("#passwordHelp").text('');
        }else {
            $("#password").removeClass("is-valid").addClass("is-invalid");
            $("#passwordHelp").text("min 6 characters one uppercase letter and 2 figures")
        }
    });
    $("#passwordBis").keyup(function(event) {
        if($("#password").val() === $("#passwordBis").val()){
            $("#passwordBis").removeClass("is-invalid").addClass("is-valid");
        }else {
            $("#passwordBis").removeClass("is-valid").addClass("is-invalid");
        }
    });

    $("#emailInput")
    $("#emailHelp")
    $("#comigOut").submit(function(event) {
        return false;
    });
});
