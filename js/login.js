$(document).ready(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

       var ValidEmail = $('#username').val() === 'user'; // User validate
var ValidPassword = $('#password').val() === 'test'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "checkout.html"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

function expandCheckoutSummary2() {
    var x = document.getElementById("checkoutSummary2");
    if (x.style.height === "150px") {
      x.style.height = "auto";
    } else {
      x.style.height = "150px";
    }
  
    var x = document.getElementById("expandCheckoutSummarybtn");
    if (x.innerHTML === "Show More +") {
      x.innerHTML = "Show Less -";
    } else {
      x.innerHTML = "Show More +";
    }
  }