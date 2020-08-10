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

function handleCliackMobileNavigationBtn(element) {
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

function handleClickNavBtn(element) {
  const mobileNavBtn = getDomElement(".nav-btn");
  addClassToElement(element, "active");
  const elementIndex = element.dataset.index;
  const newSection = findSection(elementIndex);
  const activeSection = getDomElement(".active-section");
  removeClassFromElement(activeSection, "active-section");
  addClassToElement(newSection, "active-section");
  handleCliackMobileNavigationBtn(mobileNavBtn);
}

function findSection(index) {
  const sections = getDomElements(".section-item");
  var desiredSection;
  sections.forEach((e, i) => {
    e.dataset.index == index ? (desiredSection = e) : false;
  });

  return desiredSection;
}

window.addEventListener("click", (e) => {
  const navMenuButton = document.querySelectorAll(".nav-menu-btn");
  const className = e.target.className;
  if (className == "home") {
    console.log("yes");
  }
});
