// PASSWORD GENERATOR

$(document).ready(function () {

    $(".title").text("Hello! jQuery Password Generator");


    // Generate password when generate button is clicked
    $("#generateBtn").click(function (e) {
        e.preventDefault();

        generatePassword()
        // Enable copy button
        if ($("#passwordDisplay").val() != "") {
            $('#copyPassword').removeAttr('disabled');
        }
    });


    // Enable generate button when a valid password length is set
    $("#passwordLength").keyup(function (e) {
        e.preventDefault()
        let passwordLength = $(this).val();
        if (passwordLength != '') {
            let parseL = parseInt(passwordLength)
            $(this).val(parseL);

            $('#generateBtn').removeAttr('disabled');
        }
    });

    $("#passwordLength").click(function (e) {
        e.preventDefault();
        $(this).trigger("keyup");
    });



    // Copy password to clipboard
    $("#copyPassword").click(function (e) {
        e.preventDefault();
        let passwordValue = $("#passwordDisplay").val();


        // copyPassword()
        alert("Hi copy " + passwordValue)
        $(this).text("Copied!");
    });



    // FUNCTONS
    // generate password function
    let generatePassword = function () {
        //Declarations
        let randomPassword = ""
        let passwordLength = $("#passwordLength").val(); // get password length
        let i, characterSet
        let characters = ""
        const characterSetArray = []


        // Check for possible password character
        // lowercase
        if ($("#lowercase").is(":checked")) {
            characters += "abcdefghijklmnopqrstuvwxyz"
            characterSet = "a-z"
            characterSetArray.push(characterSet)
        }
        // uppercase
        if ($("#uppercase").is(":checked")) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            characterSet = "A-Z"
            characterSetArray.push(characterSet)
        }
        // lower case
        if ($("#digits").is(":checked")) {
            characters += "0123456789"
            characterSet = "0-9"
            characterSetArray.push(characterSet)
        }
        // lower case
        if ($("#special").is(":checked")) {
            characters += "![]{}()%&*$#^<>~@|"
            characterSet = "#"
            characterSetArray.push(characterSet)
        }


        // Check if any character set has been checked
        if (characters == "") {
            alert("You have not checked any character sets.")
        } else {

            // Generate random characters
            for (i = 0; i < passwordLength; i++) {
                // Character set
                $("#passwordDisplay").attr("data-character-set", characterSetArray);

                // Generate password
                randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }

        }

        $("#passwordDisplay").val(randomPassword); //display generated password on input field
    }
});