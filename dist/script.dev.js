"use strict";

// PASSWORD GENERATOR
$(document).ready(function () {
  $(".title").text("Hello! Password Generator"); // Generate password when generate button is clicked

  $("#generateBtn").click(function (e) {
    e.preventDefault(); // Global Declarations

    var randomPassword = "";
    var passwordLength = $("#passwordLength").val(); // get password length

    var i; // Generate random characters

    for (i = 0; i < passwordLength; i++) {
      randomPassword += Math.floor(Math.random() * 9 + 1);
    }

    $("#passwordDisplay").val(randomPassword);

    if ($("#passwordDisplay").val() != "") {
      $('#copyPassword').removeAttr('disabled');
    }
  });
  $("#passwordLength").keyup(function (e) {
    e.preventDefault(); // let passwordLength = $("#passwordLength").val();

    if ($(this).val() != '') {
      $('#generateBtn').removeAttr('disabled');
    }
  });
  $("#copyPassword").click(function (e) {
    e.preventDefault();
    var passwordValue = $("#passwordDisplay").val(); // copyPassword()

    alert("Hi copy " + passwordValue);
    $(this).text("Copied!");
  }); // let copyPassword = function () {
  // }
  // function copyToClipboard(text) {
  //     var sampleTextarea = document.createElement("textarea");
  //     document.body.appendChild(sampleTextarea);
  //     sampleTextarea.value = text; //save main text in it
  //     sampleTextarea.select(); //select textarea contenrs
  //     document.execCommand("copy");
  //     document.body.removeChild(sampleTextarea);
  // }
  // function myFunction() {
  //     var copyText = document.getElementById("myInput");
  //     copyToClipboard(copyText.value);
  // }
});