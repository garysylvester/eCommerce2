// GENERAL
function aboutToggle() {
  var x = document.getElementById("aboutGame");
  if (x.style.height === "48px") {
    x.style.height = "1000px";
  } else {
    x.style.height = "48px";
  }

  var x = document.getElementById("learnMore");
  if (x.innerHTML === "About +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "About +";
  }
}

function eaPlayMore() {
  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.height === "40px") {
    x.style.height = "1048px";
  } else {
    x.style.height = "40px";
  }

  var x = document.getElementById("eaPlayMoreBtn");
  if (x.innerHTML === "Explore EA Play +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Explore EA Play +";
  }
}

function compareSubsToggle() {
  var x = document.getElementById("subsTable");
  if (x.style.height === "0px") {
    x.style.height = "861px";
  } else {
    x.style.height = "0px";
  }

  var x = document.getElementById("membershipTiles");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("compareSubs");
  if (x.innerHTML === "Compare") {
    x.innerHTML = "Tiles";
  } else {
    x.innerHTML = "Compare";
  }
}

//STEP 1
//EA DESKTOP APP
function tileToggleEAD() {
  var x = document.getElementById("eadSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ead");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("steam");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("playstation");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("xbox");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("switch");
  element.classList.toggle("platformTileInactive");

  $('html, body').animate({
    scrollTop: $("#eadSection").offset().top - 48
}, 500);
}

//STEAM
function tileToggleSteam() {
  var x = document.getElementById("steamSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("steam");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ead");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("playstation");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("xbox");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("switch");
  element.classList.toggle("platformTileInactive");

  $('html, body').animate({
    scrollTop: $("#steamSection").offset().top - 48
}, 500);
}

//PLAYSTATION
function tileTogglePlaystation() {
  var x = document.getElementById("playstationSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("playstation");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("steam");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("ead");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("xbox");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("switch");
  element.classList.toggle("platformTileInactive");

  $('html, body').animate({
    scrollTop: $("#playstationSection").offset().top - 48
}, 500);
}

//XBOX
function tileToggleXbox() {
  var x = document.getElementById("xboxSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("xbox");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("steam");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("playstation");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("ead");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("switch");
  element.classList.toggle("platformTileInactive");

  $('html, body').animate({
    scrollTop: $("#xboxSection").offset().top - 48
}, 500);
}

//SWITCH
function tileToggleSwitch() {
  window.open("https://www.nintendo.com/games/detail/fifa-21-nintendo-switch-legacy-edition-switch/", "_blank");
}


// STEP 2 //
//JOIN OR BUY
function joinEAPLAY() {
  var x = document.getElementById("eaPlaySelectMembershipSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("selectionProgressEAD2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("joinEAPlayCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("buyTheGameCard");
  element.classList.toggle("platformTileInactive");

$('html, body').animate({
    scrollTop: $("#eaPlaySelectMembershipSection").offset().top - 48
}, 500);

}

function buyTheGame() {
  var x = document.getElementById("buyTheGameSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("buyTheGameCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("joinEAPlayCard");
  element.classList.toggle("platformTileInactive");

  $('html, body').animate({
    scrollTop: $("#buyTheGameSection").offset().top - 48
}, 500);
}


//JOIN EA PLAY
function selectEAPLAY1() {
  var x = document.getElementById("eaPlaySelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("selectEAPlayCard1");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("selectEAPlayProCard1");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#eaPlaySelectPaymentPlan").offset().top - 48
}, 500);
}

function selectEAPLAY2() {
  var x = document.getElementById("eaPlaySelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("selectEAPlayCard2");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("selectEAPlayProCard2");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#eaPlaySelectPaymentPlan").offset().top - 48
}, 500);
}


//JOIN EA PLAY PRO
function selectEAPLAYPRO1() {
  var x = document.getElementById("eaPlayProSelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("selectEAPlayProCard1");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("selectEAPlayCard1");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#eaPlayProSelectPaymentPlan").offset().top - 48
}, 500);
}

function selectEAPLAYPRO2() {
  var x = document.getElementById("eaPlayProSelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD2");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("selectionProgressEAD3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("selectEAPlayProCard2");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("selectEAPlayCard2");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#eaPlayProSelectPaymentPlan").offset().top - 48
}, 500);
}

//PAYMENT PLANS - EA PLAY PRO - MONTHLY
function selectMonthlyPayments() {
  var x = document.getElementById("EADcheckoutProMonthly");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("makeSelection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("annualPaymetnsCard");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#EADcheckoutProMonthly").offset().top - 48
}, 500);
}

//PAYMENT PLANS - EA PLAY PRO - ANNUAL
function selectAnnualPayments() {
  var x = document.getElementById("EADcheckoutProAnnual");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("makeSelection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("annualPaymetnsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileInactive");


  $('html, body').animate({
    scrollTop: $("#EADcheckoutProAnnual").offset().top - 48
}, 500);
}


//Login
function goToLogin() {
  window.location.href = "login.html";
}
