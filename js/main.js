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

function compareSubsToggle(){
    var x = document.getElementById("subsTable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
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

  $(scrollingElement).animate({
    scrollTop: document.body.scrollHeight
  }, 500);
}

//SWITCH
function tileToggleSwitch() {
  window.open("https://www.nintendo.com/games/detail/fifa-21-nintendo-switch-legacy-edition-switch/", "_blank");
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
  
    var element = document.getElementById("joinEAPlayCard");
    element.classList.toggle("platformTileSelected");
  
    var element = document.getElementById("buyTheGameCard");
    element.classList.toggle("platformTileInactive");

  
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
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

  
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight
    }, 500);
  }