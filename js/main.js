// GENERAL

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

  var x = document.getElementById("membershipTiles2");
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

function compareEditionToggle() {
  var x = document.getElementById("editionTableGrid");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var x = document.getElementById("editionTable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("compareEdition");
  if (x.innerHTML === "Compare") {
    x.innerHTML = "Grid";
  } else {
    x.innerHTML = "Compare";
  }
}

function showModal() {
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
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

//STEP 1 ------------------------ SELECT DEVICE ------------------------ (START)
// SELECT PC (START)
function selectPC() {
  var x = document.getElementById("selectPCPlatform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  // var x = document.getElementById("selectionProgressEAD1");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

  // var str1 ="change function"

  // const backtrackPC = {
  //   backtrackFunction() {
  //     setTimeout(
  //       function () {
  //         document.getElementById('s1pc').setAttribute("onclick", "resetAll()");
  //         console.log(str1);
  //       }, 1000
  //     );
  //   }
  // }
  // backtrackPC.backtrackFunction();

  var element = document.getElementById("s1pc");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s1console");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("selectPCPlatform");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// BACK TO START LOGIC
// function resetAll() {
//   var x = document.getElementById("selectPCPlatform");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }

  // var x = document.getElementById("selectionProgressEAD1");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
//   var str2 ="back to default"

//   const backToStart = {
//     backToStartFunction() {
//       setTimeout(
//         function () {
//           document.getElementById('s1pc').setAttribute("onclick", "resetAll()");
//           // console.log(str2);
//         }, 1000
//       );
//     }
//   }
//   backToStart.backToStartFunction();

//   var element = document.getElementById("s1pc");
//   element.classList.toggle("platformTileSelected");

//   var element = document.getElementById("s1console");
//   element.classList.toggle("platformTileInactive");

//   var elmnt = document.getElementById("aboutGame");
//   elmnt.scrollIntoView({
//     behavior: 'smooth',
//     block: 'top'
//   });
// }

// SELECT PC (END)

// SELECT CONSOLE (START)
function selectConsole() {
  var x = document.getElementById("selectConsolePlatform");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  // var x = document.getElementById("selectionProgressEAD1");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

  var element = document.getElementById("s1console");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s1pc");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("selectConsolePlatform");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
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

  // var x = document.getElementById("selectionProgressEAD1");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

  var element = document.getElementById("s2selectEAD");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("s2selectSteam");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("eadSection");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function comparePCPlatforms() {
  var x = document.getElementById("comparePCtable");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  // var x = document.getElementById("selectPCtiles");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  // } else {
  //   x.style.display = "block";
  // }
  
  var x = document.getElementById("comparePC");
  if (x.innerHTML === "Compare +") {
    x.innerHTML = "Collapse -";
  } else {
    x.innerHTML = "Compare +";
  }


}
// EA DESKTOP APP (END)


// STEAM (START)
// function tileToggleSteam() {
//   var x = document.getElementById("steamSection");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   var x = document.getElementById("selectionProgressSteam1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }

//   var element = document.getElementById("steam");
//   element.classList.toggle("platformTileSelected");

//   var element = document.getElementById("ead");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("playstation");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("xbox");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("switch");
//   element.classList.toggle("platformTileInactive");

//   var elmnt = document.getElementById("steamSection");
//   elmnt.scrollIntoView({
//     behavior: 'smooth',
//     block: 'center'
//   });
// }
// STEAM (END)

//PLAYSTATION (START)
// function tileTogglePlaystation() {
//   var x = document.getElementById("playstationSection");
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

//   var element = document.getElementById("playstation");
//   element.classList.toggle("platformTileSelected");

//   var element = document.getElementById("steam");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("ead");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("xbox");
//   element.classList.toggle("platformTileInactive");

//   var element = document.getElementById("switch");
//   element.classList.toggle("platformTileInactive");

//   var elmnt = document.getElementById("playstationSection");
//   elmnt.scrollIntoView({
//     behavior: 'smooth',
//     block: 'center'
//   });
// }
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
//     block: 'center'
//   });
// }
// XBOX (END)

// SWITCH (START)
function tileToggleSwitch() {
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
    block: 'center'
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
    block: 'center'
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
    block: 'center'
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
    block: 'center'
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
    block: 'center'
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
    block: 'center'
  });
}
// -------- JOIN EA PLAY PRO (END)

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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("annualPaymentsCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutMonthly");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("annualPaymentsCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("monthlyPaymentsCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutAnnual");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("monthlyPaymentsProCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("annualPaymentsProCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutProMonthly");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
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
    block: 'center'
  });
}

//SWITCH
function buyGameSteam() {
  window.open("https://store.steampowered.com/app/1313860/EA_SPORTS_FIFA_21/", "_blank");
}

//SWITCH
function goToSteam() {
  window.open("https://store.steampowered.com/subscriptions/ea#SaleSection_77945", "_blank");
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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("annualPaymentsProCard");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("monthlyPaymentsProCard");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutProAnnual");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// SELECT EDITION //
// ULTIMATE EDITION 1
function buyUltimateEdition1() {
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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ultimateEdition1");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("championsEdition1");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("beckhamEdition1");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutBuyUltimateEdition");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

// ULTIMATE EDITION 2
function buyUltimateEdition2() {
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

  var x = document.getElementById("checkoutAction");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var element = document.getElementById("ultimateEdition2");
  element.classList.toggle("platformTileSelected");

  var element = document.getElementById("championsEdition2");
  element.classList.toggle("platformTileInactive");

  var element = document.getElementById("beckhamEdition2");
  element.classList.toggle("platformTileInactive");

  var elmnt = document.getElementById("EADcheckoutBuyUltimateEdition");
  elmnt.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}


//Login
function goToLogin() {
  window.location.href = "login.html";
}
