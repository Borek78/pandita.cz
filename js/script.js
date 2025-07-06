console.log("ahoj");
console.log("ahoj");
// defining variables and constants

let prevScrollPos = window.pageYOffset;
let scroll_change = 0;
const menuContainer = document.querySelector("#menu-container");
const mobileMenu = document.querySelector("#mobile-menu");
const iconClose = document.querySelector("#icon-close");
const iconMenu = document.querySelector("#icon-menu");

//go to top of the page after clicking the menu
menuContainer.addEventListener("click", goToTop);
function goToTop() {
  const bannerId = document.querySelector("#banner");
  bannerId.scrollIntoView();
  /*
  mobileMenu.classList.add("hide-mobile-menu");
  mobileMenu.classList.remove("show-mobile-menu");

  iconMenu.classList.add("show-icon-menu");
  iconMenu.classList.remove("hide-icon-menu");

  iconClose.classList.add("hide-icon-close");
  iconClose.classList.remove("show-icon-close");*/
}

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  //hiding mobile menu: hiding menu for mobile
  if (prevScrollPos < currentScrollPos) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

    iconClose.classList.add("hide-icon-close");
    iconClose.classList.remove("show-icon-close");

    iconMenu.classList.add("show-icon-menu");
    iconMenu.classList.remove("hide-icon-menu");
  }

  //un-fix the menu if currentScrollPos < 108.5
  if (currentScrollPos < 108.5) {
    menuContainer.classList.remove("fix-menu-container");
    menuContainer.classList.remove("hide-menu-container");
  }

  //hide the menu if prevScrollPos < currentScrollPos && currentScrollPos > 200
  if (prevScrollPos < currentScrollPos && currentScrollPos > 250) {
    menuContainer.classList.remove("fix-menu-container");
    menuContainer.classList.add("hide-menu-container");
  }

  //define scrollChange and count it
  //when you go up
  if (prevScrollPos > currentScrollPos) {
    scroll_change = scroll_change + (prevScrollPos - currentScrollPos);
  }
  // when you go down
  if (prevScrollPos < currentScrollPos) {
    scroll_change = 0;
  }

  // when you go up and scroll change > 300 and currentScrollPos > 300
  if (
    prevScrollPos > currentScrollPos &&
    scroll_change > 250 &&
    currentScrollPos > 300
  ) {
    menuContainer.classList.add("fix-menu-container");
    menuContainer.classList.remove("hide-menu-container");
  }
  console.log("předchozi " + prevScrollPos);
  console.log("soucasna " + currentScrollPos);
  console.log("scroll_change " + scroll_change);

  prevScrollPos = currentScrollPos;
};
/*
  //when you scroll down hide the menu but not at the top of the page
  if (prevScrollPos < currentScrollPos && currentScrollPos > 200) {
    scroll_change = 0;
  }

  //when you go up
  if (prevScrollPos > currentScrollPos) {
    scroll_change = scroll_change + (prevScrollPos - currentScrollPos);
  }

  //when you go up && currentScrollPosition < 300
  if (prevScrollPos > currentScrollPos && currentScrollPosition > 300) {
    const menu = document.querySelector("#menu-container");

    menu.classList.add("fix-menu-container");
    menu.classList.remove("hide-menu-container");
  }

  
};*/

//hide mobile menu if width > 600

window.addEventListener("resize", hideMobileMenu);

function hideMobileMenu() {
  let windowWidth = 0;

  windowWidth = window.innerWidth;

  if (windowWidth > 600) {
    mobileMenu.classList.add("hide-mobile-menu");
    mobileMenu.classList.remove("show-mobile-menu");

    iconClose.classList.add("hide-icon-close");
    iconClose.classList.remove("show-icon-close");

    iconMenu.classList.add("show-icon-menu");
    iconMenu.classList.remove("hide-icon-menu");
  }
}

// events after clicking the icon-menu
document.querySelector("#icon-menu").addEventListener("click", showMenu);
document.querySelector("#icon-menu").addEventListener("click", hideIconMenu);
document.querySelector("#icon-menu").addEventListener("click", showIconClose);

function showMenu() {
  const x = document.querySelector("#mobile-menu");
  x.classList.add("show-mobile-menu");
  x.classList.remove("hide-mobile-menu");
}

function hideIconMenu() {
  const x = document.querySelector(".show-icon-menu");
  x.classList.add("hide-icon-menu");
  x.classList.remove("show-icon-menu");
  event.stopPropagation();
}

function showIconClose() {
  const x = document.querySelector(".hide-icon-close");
  x.classList.add("show-icon-close");
  x.classList.remove("hide-icon-close");
}

// events after clicking the icon-close
document.querySelector("#icon-close").addEventListener("click", hideMenu);
document.querySelector("#icon-close").addEventListener("click", showIconMenu);
document.querySelector("#icon-close").addEventListener("click", hideIconClose);

function hideMenu() {
  const x = document.querySelector("#mobile-menu");

  x.classList.add("hide-mobile-menu");
  x.classList.remove("show-mobile-menu");
}

function showIconMenu() {
  const x = document.querySelector("#icon-menu");

  x.classList.add("show-icon-menu");
  x.classList.remove("hide-icon-menu");
}

function hideIconClose() {
  const x = document.querySelector("#icon-close");
  x.classList.add("hide-icon-close");
  x.classList.remove("show-icon-close");
  event.stopPropagation();
}
