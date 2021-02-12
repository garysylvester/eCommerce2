scrollingElement = (document.scrollingElement || document.body)

// GENERAL
function aboutToggle() {
  var x = document.getElementById("aboutGame");
  if (x.style.height === "48px") {
    x.style.height = "1000px";
  } else {
    x.style.height = "48px";
  }

  var x = document.getElementById("learnMore");
  if (x.innerHTML === "Learn More +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Learn More +";
  }
}

function eaPlayMore(){
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 2);
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 2);
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 2);
}

//SWITCH
function tileToggleSwitch() {
  window.open("http://www.w3schools.com", "_blank");
}


// STEP 2 //
//JOIN EA PLAY
function joinEAPLAY() {
    var x = document.getElementById("eaPlaySelectMembershipSection");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  
    var element = document.getElementById("xbox");
    element.classList.toggle("platformTileSelected");
  
    var element = document.getElementById("steam");
    element.classList.toggle("platformTileInactive");

  
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
    }, 2);
  }