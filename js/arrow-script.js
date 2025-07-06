const circleDesktop = document.querySelector(".circle");
const circleMobile = document.querySelector(".mobile-circle-wrapper");
const main = document.querySelector(".main");

circleDesktop.classList.add("hide-circle");
circleMobile.classList.add("hide-circle");

main.classList.remove("main");
main.classList.add("main-padding-top-40");

console.log("arrow script funguje");
