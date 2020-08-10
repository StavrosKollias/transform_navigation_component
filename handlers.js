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

function setPropertyStyleTransform(elementProperty, value) {
  elementProperty.transform = value;
}

function getDataIndexFromElement(element) {
  return element.dataset.index;
}

function getClassListFromElement(element) {
  return element.classList.length;
}

//-----------------------------------
//           handlers
//-----------------------------------

function handleCliackMobileNavigationBtn(element) {
  const elements = getElementsForMobileNavClick();
  const classListElement = getClassListFromElement(element);
  if (classListElement == 1) {
    addClassToElement(element, "active");
    addClassToElement(elements.sectionContainer, "active");
    addClassToElement(elements.navbar, "active");
  } else {
    removeClassFromElement(element, "active");
    removeClassFromElement(elements.sectionContainer, "active");
    removeClassFromElement(elements.navbar, "active");
  }
}

function getElementsForMobileNavClick() {
  const sectionContainer = getDomElement(".sections-container");
  const navbar = getDomElement(".nav-bar");
  return { navbar: navbar, sectionContainer: sectionContainer };
}

function handleClickNavBtn(element) {
  const mobileNavBtn = getDomElement(".nav-btn");
  const elementIndex = getDataIndexFromElement(element);
  const newSection = findSection(elementIndex);
  const transformval = getValCssPropertyElement(newSection, "transform");
  const activeSection = getDomElement(".active-section");
  const activeNavBtn = getDomElement(".active-nav-btn");
  removeClassFromElement(activeNavBtn, "active-nav-btn");
  removeClassFromElement(activeSection, "active-section");
  setPropertyStyleTransform(activeSection.style, transformval);
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
