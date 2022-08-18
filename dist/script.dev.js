"use strict";

// PASSWORD GENERATOR
$(document).ready(function () {
  $(".title").text("Hello! Password Generator"); // Generate password when generate button is clicked

  $("#generateBtn").click(function (e) {
    e.preventDefault();
    $("#passwordDisplay").val(value);
  });
});