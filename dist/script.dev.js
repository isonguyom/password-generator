"use strict";

// PASSWORD GENERATOR
$(document).ready(function () {
  $(".title").text("Hello! jQuery Password Generator"); // Generate password when generate button is clicked

  $("#generateBtn").click(function (e) {
    e.preventDefault();
    generatePassword();
    $('#copyPassword').text("Copy"); // Enable copy button

    if ($("#passwordDisplay").val() != "") {
      $('#copyPassword').removeAttr('disabled');
    }
  }); // Enable generate button when a valid password length is set

  $("#passwordLength").keyup(function (e) {
    e.preventDefault();
    var passwordLength = $(this).val();

    if (passwordLength != '') {
      var parseL = parseInt(passwordLength);
      $(this).val(parseL);
      $('#generateBtn').removeAttr('disabled');
    }
  });
  $("#passwordLength").click(function (e) {
    e.preventDefault();
    $(this).trigger("keyup");
  }); // Copy password to clipboard

  $("#copyPassword").click(function (e) {
    e.preventDefault();
    var passwordValue = $("#passwordDisplay").val();

    if (passwordValue != '') {
      copyPassword();
      $(this).text("Copied!");
    } else {
      alert("You have not generated any passwords.");
    }
  }); // FUNCTONS
  // generate password function

  var generatePassword = function generatePassword() {
    //Declarations
    var randomPassword = "";
    var passwordLength = $("#passwordLength").val(); // get password length

    var i, characterSet;
    var characters = "";
    var characterSetArray = []; // Check for possible password character
    // lowercase

    if ($("#lowercase").is(":checked")) {
      characters += "abcdefghijklmnopqrstuvwxyz";
      characterSet = "a-z";
      characterSetArray.push(characterSet);
    } // uppercase


    if ($("#uppercase").is(":checked")) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      characterSet = "A-Z";
      characterSetArray.push(characterSet);
    } // lower case


    if ($("#digits").is(":checked")) {
      characters += "0123456789";
      characterSet = "0-9";
      characterSetArray.push(characterSet);
    } // lower case


    if ($("#special").is(":checked")) {
      characters += "![]{}()%&*$#^<>~@|";
      characterSet = "#";
      characterSetArray.push(characterSet);
    } // Check if any character set has been checked


    if (characters == "") {
      alert("You have not checked any character sets.");
    } else {
      // Generate random characters
      for (i = 0; i < passwordLength; i++) {
        // Character set
        $("#passwordDisplay").attr("data-character-set", characterSetArray); // Generate password

        randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    }

    $("#passwordDisplay").val(randomPassword); //display generated password on input field
  };

  var copyPassword = function copyPassword() {
    /* Get the password display field field */
    var passwordField = $("#passwordDisplay");
    /* Select the password */

    passwordField.select();
    /* Copy the password inside the password display field */

    navigator.clipboard.writeText(passwordField.val());
    /* Alert the copied text */

    alert("Copied password: " + passwordField.val());
  };
});