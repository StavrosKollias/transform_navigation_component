//-----------------------------------
//           functions
//-----------------------------------

const getDomElements = (type) => {
  return document.querySelectorAll(type);
};

const getDomElement = (type) => {
  return document.querySelector(type);
};

const addClassToElement = (element, className) => {
  element.classList.add(className);
};

const removeClassFromElement = (element, className) => {
  element.classList.remove(className);
};

//-----------------------------------
//           handlers
//-----------------------------------

function handleCliackNavigationBtn(element) {
  const sectionContainer = getDomElement(".sections-container");
  const navbar = getDomElement(".nav-bar");
  if (element.classList.length == 1) {
    addClassToElement(element, "active");
    addClassToElement(sectionContainer, "active");
    addClassToElement(navbar, "active");
  } else {
    removeClassFromElement(element, "active");
    removeClassFromElement(sectionContainer, "active");
    removeClassFromElement(navbar, "active");
  }
}

window.addEventListener("click", (e) => {
  const navMenuButton = document.querySelectorAll(".nav-menu-btn");
  const className = e.target.className;
  if (className == "home") {
    console.log("yes");
  }
});
