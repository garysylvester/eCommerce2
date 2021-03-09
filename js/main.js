// GENERAL

const interval = setInterval(() => {
  windowLocation()
}, 5)

function windowLocation() {
  var hash = window.location.hash.includes('hidelogin');
  if (hash) {
    const earlyLoginBlock = document.getElementById('earlyLoginBlock')
    const stepOne = document.getElementById('selectPCPlatform')
    const selectedStatePC = document.getElementById('s1pc')
    const inactiveStateConsole = document.getElementById('s1console')
    const stepTwo = document.getElementById('eadSection')
    const selectedStateEAD = document.getElementById('s2selectEAD')
    const inactiveStateSteam = document.getElementById('s2selectSteam')
    const selectionProgress = document.getElementById('selectionProgressEAD1')
    const scrollPosition = document.getElementById('makeSelection')
    if (stepOne) {
      stepOne.style.display = 'block'
      stepTwo.style.display = 'block'
      selectionProgress.style.display = 'block'
      selectedStatePC.classList.add('platformTileSelected')
      inactiveStateConsole.classList.add('platformTileInactive')
      selectedStateEAD.classList.add('platformTileSelected')
      inactiveStateSteam.classList.add('platformTileInactive')
      scrollPosition.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      clearInterval(interval)
    }
    if (earlyLoginBlock) {
      earlyLoginBlock.style.display = 'none'
      clearInterval(interval)
    }

  } else {
    clearInterval(interval)
  }
}

function showAvatar() {
  var hash = window.location.hash.includes('hidelogin');
  if (hash) {
    const profilePicture = document.getElementById('profilePicture')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showAvatar()

setTimeout(function showWelcome() {
  var hash = window.location.hash.includes('hidelogin');
  if (hash) {
    const welcomeBackUT = document.getElementById('welcomeBack')
    if (welcomeBackUT) {
      welcomeBackUT.classList.add('animate-welcome-back')
    }
  }
}, 500);


setTimeout(function hideWelcome() {
  var hash = window.location.hash.includes('hidelogin');
  if (hash) {
    const welcomeBackUT = document.getElementById('welcomeBack')
    if (welcomeBackUT) {
      welcomeBackUT.classList.remove('animate-welcome-back')
    }
  }
}, 5000);

setTimeout(function showCheckoutWelcome() {
  var hash = window.location.hash.includes('showAvatar');
  if (hash) {
    const welcomeBackUT = document.getElementById('welcomeBack')
    if (welcomeBackUT) {
      welcomeBackUT.classList.add('animate-welcome-back')
    }
  }
}, 500);


setTimeout(function hideCheckoutWelcome() {
  var hash = window.location.hash.includes('showAvatar');
  if (hash) {
    const welcomeBackUT = document.getElementById('welcomeBack')
    if (welcomeBackUT) {
      welcomeBackUT.classList.remove('animate-welcome-back')
    }
  }
}, 5000);


function aboutToggle() {
  var x = document.getElementById("aboutGame");
  if (x.style.height === "48px") {
    x.style.height = "auto";
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

function eaPlayMore2() {
  var x = document.getElementById("eaPlayMoreDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("eaPlayMoreBtn2");
  if (x.innerHTML === "Explore EA Play +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Explore EA Play +";
  }
}

function compareSubsToggle() {
  var x = document.getElementById("subsTable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareSubs");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}

//------------------------ COMPARE EDITION ------------------------ (START)
function compareEditionToggle() {
  var x = document.getElementById("editionTable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareEdition");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}

function compareEditionToggle2() {
  var x = document.getElementById("editionTable2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareEdition2");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}

function compareEditionToggle3() {
  var x = document.getElementById("editionTable3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareEdition3");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}
//------------------------ COMPARE EDITION ------------------------ (END)

//------------------------ SHOW MODAL ------------------------ (END)
function showModal() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function showModal2() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function showModal3() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function showModal4() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

function closeModal() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function closeModal2() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function closeModal3() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function closeModal4() {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});
//------------------------ SHOW MODAL ------------------------ (END)

//STEP 1 ------------------------ SELECT DEVICE ------------------------ (START)
// SELECT PC (START)
function selectPC() {
  var x = document.getElementById("selectPCPlatform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s1pc");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s1console");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("selectPCPlatform");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// SELECT PC (END)

// SELECT CONSOLE (START)
function selectConsole() {
  var x = document.getElementById("selectConsolePlatform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s1console");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s1pc");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("selectConsolePlatform");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// SELECT CONSOLE (END)
//STEP 1 ------------------------ SELECT DEVICE ------------------------ (END)


// STEP 2 ----------------- SELECT SELECT PLATFORM - PC ----------------- (START)
// EA DESKTOP APP (START)
function selectPlatformEAD() {
  var x = document.getElementById("eadSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("earlyLoginBlock");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    if (!window.location.hash.includes('hidelogin')) {
      x.style.display = "none"
    }
  }

  var x = document.getElementById("selectionProgressEAD1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s2selectEAD");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s2selectSteam");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("eadSection");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function comparePCPlatforms() {
  var x = document.getElementById("comparePCtable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("comparePC");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }


}
// EA DESKTOP APP (END)


// -------- STEAM (START) --------

// -------- GENERAL (START)
function compareJoinBuy2() {
  var x = document.getElementById("compareJoinBuySection2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareJoinBuybtn2");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}

function eadCallout() {
  var x = document.getElementById("steamSection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("selectionProgressSteam1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var element = document.getElementById("s2selectSteam");
  element.classList.remove("platformTileSelected");

  var element = document.getElementById("s2selectEAD");
  element.classList.remove("platformTileInactive");

}


// -------- GENERAL (START)

function selectPlatformSteam() {
  var x = document.getElementById("steamSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressSteam1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s2selectSteam");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s2selectEAD");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("steamSection");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// STEAM (END)

//PLAYSTATION (START)
// GENERAL (START)
function compareJoinBuy3() {
  var x = document.getElementById("compareJoinBuySection3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareJoinBuybtn3");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}

function compareJoinBuy4() {
  var x = document.getElementById("compareJoinBuySection4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareJoinBuybtn4");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}
// GENERAL (END)

// ----- PS5 -----
function selectPS5() {
  var x = document.getElementById("playstation5Section");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressPS5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s2ps5");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s2ps4");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2xboxXS");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2xboxOne");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2switch");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("playstation5Section");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function ps5joinEAPlay() {
  var x = document.getElementById("ps5EAPlaySelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ps5compareJoinCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ps5compareBuyCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("ps5EAPlaySelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function selectMonthlyPaymentsps5() {
  window.open("https://store.playstation.com/en-us/product/UP5498-CUSA15087_00-PSEAA99CENTPROMO", "_blank");
}

function selectAnnualPaymentsps5() {
  window.open("https://store.playstation.com/en-us/product/UP5498-CUSA15087_00-PSEAA12M00000000", "_blank");
}

function ps5buyFifa() {
  var x = document.getElementById("buyTheGameSectionPS5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ps5compareBuyCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ps5compareJoinCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("buyTheGameSectionPS5");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function buyStandardEditionps5() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-FIFAFOOTBALL2021", "_blank");
}

function buyChampionsEditionps5() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-POSTLAUNCHCHAMPN", "_blank");
}

function buyUltimateEditionps5() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-POSTLAUNCHULTIMA", "_blank");
}

function buyNXTLVLEditionps5() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-PS5LAUNCHBUNDLE0", "_blank");
}


// ----- PS4 -----
function selectPS4() {
  var x = document.getElementById("playstation4Section");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressPS4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("s2ps4");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s2ps5");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2xboxXS");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2xboxOne");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("s2switch");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("playstation4Section");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function ps4joinEAPlay() {
  var x = document.getElementById("ps4EAPlaySelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ps4compareJoinCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ps4compareBuyCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("ps4EAPlaySelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function ps4buyFifa() {
  var x = document.getElementById("buyTheGameSectionPS4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ps4compareBuyCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ps4compareJoinCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("buyTheGameSectionPS4");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function selectMonthlyPaymentsps4() {
  window.open("https://store.playstation.com/en-us/product/UP5498-CUSA15087_00-PSEAA99CENTPROMO", "_blank");
}

function selectAnnualPaymentsps4() {
  window.open("https://store.playstation.com/en-us/product/UP5498-CUSA15087_00-PSEAA12M00000000", "_blank");
}

function buyStandardEditionps4() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-FIFAFOOTBALL2021", "_blank");
}

function buyChampionsEditionps4() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-POSTLAUNCHCHAMPN", "_blank");
}

function buyUltimateEditionps4() {
  window.open("https://store.playstation.com/en-US/product/UP0006-PPSA01327_00-POSTLAUNCHULTIMA", "_blank");
}


// PLAYSTATIOON (END)

// XBOX (START)
// function tileToggleXbox() {
//   var x = document.getElementById("xboxSection");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   var x = document.getElementById("eaPlayMoreDiv");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   var element = document.getElementById("xbox");
//   element.classList.toggle("platformTileSelected");

//   var element = document.getElementById("steam");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("playstation");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("ead");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("switch");
//   element.classList.toggle("platformTileInactive");

//   var elmnt = document.getElementById("xboxSection");
//   elmnt.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
//   });
// }
// XBOX (END)

// SWITCH (START)
function selectSwitch() {
  window.open("https://www.nintendo.com/games/detail/fifa-21-nintendo-switch-legacy-edition-switch/", "_blank");
}
// SWITCH (END)


// STEP 3 ----------------- JOIN OR BUY ----------------- (START)

// -------- GENERAL (START)
function compareJoinBuy() {
  var x = document.getElementById("compareJoinBuySection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareJoinBuybtn");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }
}
// -------- GENERAL (START)

// -------- JOIN EA PLAY (START)
function compareJoin() {
  var x = document.getElementById("eaPlaySelectMembershipSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("earlyLoginBlock");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    if (!window.location.hash.includes('hidelogin')) {
      x.style.display = "block"
    }
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

  var element = document.getElementById("compareJoinCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("compareBuyCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("eaPlaySelectMembershipSection");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// -------- JOIN EA PLAY (END)


// -------- BUY THE GAME (START)
function compareBuy() {
  var x = document.getElementById("buyTheGameSection");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("earlyLoginBlock");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    if (!window.location.hash.includes('hidelogin')) {
      x.style.display = "block"
    }
  }

  var x = document.getElementById("selectionProgressEAD2Buy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("compareBuyCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("compareJoinCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("buyTheGameSection");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// -------- BUY THE GAME (END)
// STEP 3 ----------------- JOIN OR BUY ----------------- (END)


// STEP 4 ----------------- SELECT A MEMBERSHIP ----------------- (START)
// -------- JOIN EA PLAY (START)
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

  var elmnt = document.getElementById("eaPlaySelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
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

  var elmnt = document.getElementById("eaPlaySelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// -------- JOIN EA PLAY (END)


// -------- JOIN EA PLAY PRO (START)
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

  var elmnt = document.getElementById("eaPlayProSelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
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

  var elmnt = document.getElementById("eaPlayProSelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
// -------- JOIN EA PLAY PRO (END)

// MEMBERSHIPS
function isMembershipSelected(){
  var EAPM = document.getElementById("EADcheckoutMonthly");
  var EAPA = document.getElementById("EADcheckoutAnnual");
  var EAPPM = document.getElementById("EADcheckoutProMonthly");
  var EAPPA = document.getElementById("EADcheckoutProAnnual");
  return EAPM.style.display === "block" || EAPA.style.display === "block" || EAPPM.style.display === "block" || EAPPA.style.display === "block";
}

//PAYMENT PLANS - EA PLAY - MONTHLY
function selectMonthlyPayments() {
  var x = document.getElementById("EADcheckoutMonthly");
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

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutEAPM");
  var noLogin = document.getElementById("skipLoginCheckoutEAPM");
  if (isMembershipSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("annualPaymentsCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutMonthly");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}


//PAYMENT PLANS - EA PLAY  - ANNUAL
function selectAnnualPayments() {
  var x = document.getElementById("EADcheckoutAnnual");
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

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutEAPA");
  var noLogin = document.getElementById("skipLoginCheckoutEAPA");
  if (isMembershipSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("annualPaymentsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutAnnual");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

//PAYMENT PLANS - EA PLAY PRO - ANNUAL
function selectAnnualPaymentsPro() {
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

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutEAPPA");
  var noLogin = document.getElementById("skipLoginCheckoutEAPPA");
  if (isMembershipSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("annualPaymentsProCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("monthlyPaymentsProCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutProAnnual");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

//PAYMENT PLANS - EA PLAY PRO - MONTHLY
function selectMonthlyPaymentsPro() {
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

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutEAPPM");
  var noLogin = document.getElementById("skipLoginCheckoutEAPPM");
  if (isMembershipSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("monthlyPaymentsProCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("annualPaymentsProCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutProMonthly");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

//JOIN- EA PLAY - STEAM 
function joinEAPlaySteam() {
  var x = document.getElementById("steamEAPlaySelectPaymentPlan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressSteam1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var element = document.getElementById("steamJoin");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("steamBuy");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("steamEAPlaySelectPaymentPlan");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// ----- EXTERNAL LINKS -----
function buyGameSteam() {
  window.open("https://store.steampowered.com/app/1313860/EA_SPORTS_FIFA_21/", "_blank");
}

function goToSteam() {
  window.open("https://store.steampowered.com/subscriptions/ea#SaleSection_77945", "_blank");
}

// SELECT EDITION //
function isGameSelected(){
  var standardEdition = document.getElementById("EADcheckoutBuyStandardEdition");
  var ultimateEdition = document.getElementById("EADcheckoutBuyUltimateEdition");
  var championsEdition = document.getElementById("EADcheckoutBuyChampionsEdition");
  return standardEdition.style.display === "block" || ultimateEdition.style.display === "block" || championsEdition.style.display === "block";
}
// ULTIMATE EDITION
function buyUltimateEdition() {
  var x = document.getElementById("EADcheckoutBuyUltimateEdition");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD2Buy");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("makeSelection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutUE");
  var noLogin = document.getElementById("skipLoginCheckoutUE");
  if (isGameSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("ultimateEdition");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("championsEdition");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("standardEdition");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutBuyUltimateEdition");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// CHAMPIONS EDITION
function buyChampionsEdition() {
  var x = document.getElementById("EADcheckoutBuyChampionsEdition");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD2Buy");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("makeSelection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutCE");
  var noLogin = document.getElementById("skipLoginCheckoutCE");
  if (isGameSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var element = document.getElementById("championsEdition");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("ultimateEdition");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("standardEdition");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutBuyChampionsEdition");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// STANDARD EDITION
function buyStandardEdition() {
  var x = document.getElementById("EADcheckoutBuyStandardEdition");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("selectionProgressEAD2Buy");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("makeSelection");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var hash = window.location.hash.includes('hidelogin');
  var login = document.getElementById("checkoutSE");
  var noLogin = document.getElementById("skipLoginCheckoutSE");
  if (isGameSelected()) {
    if (hash) {
      noLogin.style.display = "block";
    }
    if (!hash) {
      login.style.display = "block";
    }
  } else {
    if (hash) {
      noLogin.style.display = "none";
    } 

    if (!hash) {
      login.style.display = "none";
    }
  }

  var standardEdition = document.getElementById("standardEdition");
  standardEdition.classList.toggle("platformTileSelected");

  var element = document.getElementById("ultimateEdition");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("championsEdition");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutBuyStandardEdition");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// LOGIN
function earlyLoginCTA() {
  window.location.href = "earlyLogin.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

function goToLoginSE() {
  window.location.href = "login.html#standard-edition";
}

function goToLoginUE() {
  window.location.href = "login.html#ultimate-edition";
}

function goToLoginCE() {
  window.location.href = "login.html#champions-edition";
}

function goToLoginEAPA() {
  window.location.href = "login.html#eapa";
}

function goToLoginEAPM() {
  window.location.href = "login.html#eapm";
}

function goToLoginEAPPM() {
  window.location.href = "login.html#eappm";
}

function goToLoginEAPPA() {
  window.location.href = "login.html#eappa";
}

// CHECKOUT
function goToCheckoutSE() {
  window.location.href = "checkout.html#standard-edition";
}

function goToCheckoutUE() {
  window.location.href = "checkout.html#ultimate-edition";
}

function goToCheckoutCE() {
  window.location.href = "checkout.html#champions-edition";
}

function goToCheckoutEAPA() {
  window.location.href = "checkout.html#eapa";
}

function goToCheckoutEAPM() {
  window.location.href = "checkout.html#eapm";
}

function goToCheckoutEAPPM() {
  window.location.href = "checkout.html#eappm";
}

function goToCheckoutEAPPA() {
  window.location.href = "checkout.html#eappa";
}

// CHECKOUT SUMMARY
// EA PLAY PRO - ANNUAL
function expandCheckoutSummaryEAPPA() {
  var x = document.getElementById("checkoutSummaryEAPPA");
  if (x.style.height === "auto") {
    x.style.height = "135px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryEAPPA");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showEAPPASummary() {
  var hash = window.location.hash.includes('eappa');
  if (hash) {
    const profilePicture = document.getElementById('checkoutEAPPA')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPPASummary()

// EA PLAY PRO - MONTHLY
function expandCheckoutSummaryEAPPM() {
  var x = document.getElementById("checkoutSummaryEAPPM");
  if (x.style.height === "auto") {
    x.style.height = "135px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryEAPPM");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showEAPPMSummary() {
  var hash = window.location.hash.includes('eappm');
  if (hash) {
    const profilePicture = document.getElementById('checkoutEAPPM')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPPMSummary()

// EA PLAY  - ANNUAL
function expandCheckoutSummaryEAPA() {
  var x = document.getElementById("checkoutSummaryEAPA");
  if (x.style.height === "auto") {
    x.style.height = "135px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryEAPA");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showEAPASummary() {
  var hash = window.location.hash.includes('eapa');
  if (hash) {
    const profilePicture = document.getElementById('checkoutEAPA')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPASummary()

// EA PLAY  - MONTHLY
function expandCheckoutSummaryEAPM() {
  var x = document.getElementById("checkoutSummaryEAPM");
  if (x.style.height === "auto") {
    x.style.height = "135px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryEAPM");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showEAPMSummary() {
  var hash = window.location.hash.includes('eapm');
  if (hash) {
    const profilePicture = document.getElementById('checkoutEAPM')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showEAPMSummary()

// STANDARD EDITION
function expandCheckoutSummarySE() {
  var x = document.getElementById("checkoutSummarySE");
  if (x.style.height === "auto") {
    x.style.height = "188px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummarySE");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showSESummary() {
  var hash = window.location.hash.includes('standard-edition');
  if (hash) {
    const profilePicture = document.getElementById('checkoutSE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showSESummary()

// ULTIMATE EDITION
function expandCheckoutSummaryUE() {
  var x = document.getElementById("checkoutSummaryUE");
  if (x.style.height === "auto") {
    x.style.height = "188px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryUE");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showUESummary() {
  var hash = window.location.hash.includes('ultimate-edition');
  if (hash) {
    const profilePicture = document.getElementById('checkoutUE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showUESummary()

// CHAMPIONS EDITION
function expandCheckoutSummaryCE() {
  var x = document.getElementById("checkoutSummaryCE");
  if (x.style.height === "auto") {
    x.style.height = "188px";
  } else {
    x.style.height = "auto";
  }

  var x = document.getElementById("expandCheckoutSummaryCE");
  if (x.innerHTML === "Show More +") {
    x.innerHTML = "Show Less -";
  } else {
    x.innerHTML = "Show More +";
  }
}

function showCESummary() {
  var hash = window.location.hash.includes('champions-edition');
  if (hash) {
    const profilePicture = document.getElementById('checkoutCE')
    if (profilePicture) {
      profilePicture.style.display = 'block'
    }
  }
}
showCESummary()


// PAYMENT METHOD
function selectCreditCard() {
  var x = document.getElementById("checkoutCTA2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("amex2");
  element.classList.toggle("platformTileSelected");

}

// REVIEW ORDER
// Standard Edition
function showSEreview() {
  var hash = window.location.hash.includes('standard-edition');
  if (hash) {
    const reviewOrderBtnSE = document.getElementById('reviewOrderSE')
    if (reviewOrderBtnSE) {
      reviewOrderBtnSE.style.display = 'block'
    }
  }
}
showSEreview()

function goToReviewOrderSE() {
  window.location.href = "review-order.html#standard-edition";
}

// Ultimate Edition
function showUEreview() {
  var hash = window.location.hash.includes('ultimate-edition');
  if (hash) {
    const reviewOrderBtnUE = document.getElementById('reviewOrderUE')
    if (reviewOrderBtnUE) {
      reviewOrderBtnUE.style.display = 'block'
    }
  }
}
showUEreview()

function goToReviewOrderUE() {
  window.location.href = "review-order.html#ultimate-edition";
}

// Champions Edition
function showCEreview() {
  var hash = window.location.hash.includes('champions-edition');
  if (hash) {
    const reviewOrderBtnCE = document.getElementById('reviewOrderCE')
    if (reviewOrderBtnCE) {
      reviewOrderBtnCE.style.display = 'block'
    }
  }
}
showCEreview()

function goToReviewOrderCE() {
  window.location.href = "review-order.html#champions-edition";
}

// EA Play - Monthly
function showEAPMreview() {
  var hash = window.location.hash.includes('eapm');
  if (hash) {
    const reviewOrderBtnEAPM = document.getElementById('reviewOrderEAPM')
    if (reviewOrderBtnEAPM) {
      reviewOrderBtnEAPM.style.display = 'block'
    }
  }
}
showEAPMreview()

function goToReviewOrderEAPM() {
  window.location.href = "review-order.html#eapm";
}

// EA Play - Annual
function showEAPAreview() {
  var hash = window.location.hash.includes('eapa');
  if (hash) {
    const reviewOrderBtnEAPA = document.getElementById('reviewOrderEAPA')
    if (reviewOrderBtnEAPA) {
      reviewOrderBtnEAPA.style.display = 'block'
    }
  }
}
showEAPAreview()

function goToReviewOrderEAPA() {
  window.location.href = "review-order.html#eapa";
}

// EA Play Pro - Annual
function showEAPPAreview() {
  var hash = window.location.hash.includes('eappa');
  if (hash) {
    const reviewOrderBtnEAPPA = document.getElementById('reviewOrderEAPPA')
    if (reviewOrderBtnEAPPA) {
      reviewOrderBtnEAPPA.style.display = 'block'
    }
  }
}
showEAPPAreview()

function goToReviewOrderEAPPA() {
  window.location.href = "review-order.html#eappa";
}
// EA Play Pro - Monthly
function showEAPPMreview() {
  var hash = window.location.hash.includes('eappm');
  if (hash) {
    const reviewOrderBtnEAPPM = document.getElementById('reviewOrderEAPPM')
    if (reviewOrderBtnEAPPM) {
      reviewOrderBtnEAPPM.style.display = 'block'
    }
  }
}
showEAPPMreview()

// PAY NOW
// Standard Edition
function showPayNowSE() {
  var hash = window.location.hash.includes('standard-edition');
  if (hash) {
    const payNowBtnSE = document.getElementById('payNowSEbtn')
    if (payNowBtnSE) {
      payNowBtnSE.style.display = 'block'
    }
  }
}
showPayNowSE()

function payNowSE() {
  window.location.href = "order-confirmation.html#standard-edition";
}

// Ultimate Edition
function showPayNowUE() {
  var hash = window.location.hash.includes('ultimate-edition');
  if (hash) {
    const payNowBtnUE = document.getElementById('payNowUEbtn')
    if (payNowBtnUE) {
      payNowBtnUE.style.display = 'block'
    }
  }
}
showPayNowUE()

function payNowUE() {
  window.location.href = "order-confirmation.html#ultimate-edition";
}

// Champions Edition
function showPayNowCE() {
  var hash = window.location.hash.includes('champions-edition');
  if (hash) {
    const payNowBtnCE = document.getElementById('payNowCEbtn')
    if (payNowBtnCE) {
      payNowBtnCE.style.display = 'block'
    }
  }
}
showPayNowCE()

function payNowCE() {
  window.location.href = "order-confirmation.html#champions-edition";
}

// EA Play - Monthly
function showPayNowEAPM() {
  var hash = window.location.hash.includes('eapm');
  if (hash) {
    const payNowBtnEAPM = document.getElementById('payNowEAPMbtn')
    if (payNowBtnEAPM) {
      payNowBtnEAPM.style.display = 'block'
    }
  }
}
showPayNowEAPM()

function payNowEAPM() {
  window.location.href = "order-confirmation.html#eapm";
}

// EA Play - Annual
function showPayNowEAPA() {
  var hash = window.location.hash.includes('eapa');
  if (hash) {
    const payNowBtnEAPA = document.getElementById('payNowEAPAbtn')
    if (payNowBtnEAPA) {
      payNowBtnEAPA.style.display = 'block'
    }
  }
}
showPayNowEAPA()

function payNowEAPA() {
  window.location.href = "order-confirmation.html#eapa";
}

// EA Play Pro - Annual
function showPayNowEAPPA() {
  var hash = window.location.hash.includes('eappa');
  if (hash) {
    const payNowBtnEAPPA = document.getElementById('payNowEAPPAbtn')
    if (payNowBtnEAPPA) {
      payNowBtnEAPPA.style.display = 'block'
    }
  }
}
showPayNowEAPPA()

function payNowEAPPA() {
  window.location.href = "order-confirmation.html#eappa";
}

// EA Play Pro - Monthly
function showPayNowEAPPM() {
  var hash = window.location.hash.includes('eappm');
  if (hash) {
    const payNowBtnEAPPM = document.getElementById('payNowEAPPMbtn')
    if (payNowBtnEAPPM) {
      payNowBtnEAPPM.style.display = 'block'
    }
  }
}
showPayNowEAPPM()

function payNowEAPPM() {
  window.location.href = "order-confirmation.html#eappm";
}

// ORDER CONFIRMATION
// EA Play - Annual
function showConfEAPA() {
  var hash = window.location.hash.includes('eapa');
  if (hash) {
    const showEAPA = document.getElementById('confEAPA')
    if (showEAPA) {
      showEAPA.style.display = 'block'
    }
  }
}
showConfEAPA()

// EA Play - Monthly
function showConfEAPM() {
  var hash = window.location.hash.includes('eapm');
  if (hash) {
    const showEAPM = document.getElementById('confEAPM')
    if (showEAPM) {
      showEAPM.style.display = 'block'
    }
  }
}
showConfEAPM()

// EA Play Pro - Annual
function showConfEAPPA() {
  var hash = window.location.hash.includes('eappa');
  if (hash) {
    const showEAPPA = document.getElementById('confEAPPA')
    if (showEAPPA) {
      showEAPPA.style.display = 'block'
    }
  }
}
showConfEAPPA()

// EA Play Pro - Monthly
function showConfEAPPM() {
  var hash = window.location.hash.includes('eappm');
  if (hash) {
    const showEAPPM = document.getElementById('confEAPPM')
    if (showEAPPM) {
      showEAPPM.style.display = 'block'
    }
  }
}
showConfEAPPM()

// Standard Edition
function showConfSE() {
  var hash = window.location.hash.includes('standard-edition');
  if (hash) {
    const showSEconf = document.getElementById('confSE')
    if (showSEconf) {
      showSEconf.style.display = 'block'
    }
  }
}
showConfSE()

// Champions Edition
function showConfCE() {
  var hash = window.location.hash.includes('champions-edition');
  if (hash) {
    const showCEconf = document.getElementById('confCE')
    if (showCEconf) {
      showCEconf.style.display = 'block'
    }
  }
}
showConfCE()

// Champions Edition
function showConfUE() {
  var hash = window.location.hash.includes('ultimate-edition');
  if (hash) {
    const showUEconf = document.getElementById('confUE')
    if (showUEconf) {
      showUEconf.style.display = 'block'
    }
  }
}
showConfUE()


function payNow() {
  window.location.href = "order-confirmation.html";
}

function backToStart() {
  window.location.href = "index.html";
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

// ORDER CONFIRMATION
setTimeout(function removeLottie() {
  const lottieAnim = document.getElementById('lottiePlayer')
  lottieAnim.style.display = 'none'
  console.log('time')
}, 4000);

// PRICES
function priceEAPA(){
  var hash = window.location.hash.includes('eapa');
  var subtotal = document.getElementById('orderSubtotal');
  var tax = document.getElementById('orderTax');
  var total = document.getElementById('orderTotal');
  if (hash) {
    subtotal.innerHTML = "$29.99";
    tax.innerHTML = "$2.09";
    total.innerHTML = "$32.09";
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceEAPA()

function priceEAPM(){
  var hash = window.location.hash.includes('eapm');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$4.99";
    tax.innerHTML = "$0.35";
    total.innerHTML = "$5.34";
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceEAPM()

function priceEAPPM(){
  var hash = window.location.hash.includes('eappm');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$14.99";
    tax.innerHTML = "$1.05";
    total.innerHTML = "$16.04";
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceEAPPM()

function priceEAPPA(){
  var hash = window.location.hash.includes('eappa');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$99.99";
    tax.innerHTML = "$6.99";
    total.innerHTML = "$106.98";
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceEAPPA()

function priceSE(){
  var hash = window.location.hash.includes('standard-edition');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$59.99";
    tax.innerHTML = "$4.19";
    total.innerHTML = "$64.19";
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceSE()

function priceCE(){
  var hash = window.location.hash.includes('champions-edition');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$79.99";
    tax.innerHTML = "$5.59"
    total.innerHTML = "$85.59"
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a";
    total.innerHTML = "n/a";
  }
}
priceCE()

function priceUE(){
  var hash = window.location.hash.includes('ultimate-edition');
  var subtotal = document.getElementById("orderSubtotal");
  var tax = document.getElementById("orderTax");
  var total = document.getElementById("orderTotal");
  if (hash) {
    subtotal.innerHTML = "$99.99";
    tax.innerHTML = "$6.99"
    total.innerHTML = "$106.98"
  } else {
    subtotal.innerHTML = "n/a";
    tax.innerHTML = "n/a"
    total.innerHTML = "n/a"
  }
}
priceUE()