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

var getValCssPropertyElement = function (elem, style) {
  return window.getComputedStyle(elem).getPropertyValue(style);
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
  const elementIndex = element.dataset.index;
  const newSection = findSection(elementIndex);
  const transformval = getValCssPropertyElement(newSection, "transform");
  const activeSection = getDomElement(".active-section");
  const activeNavBtn = getDomElement(".active-nav-btn");
  removeClassFromElement(activeNavBtn, "active-nav-btn");
  removeClassFromElement(activeSection, "active-section");
  activeSection.style.transform = transformval;
  addClassToElement(element, "active-nav-btn");
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
