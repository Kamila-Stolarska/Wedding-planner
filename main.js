// mobile menu
const hamburgerMenu = document.querySelector(".mobile-menu-icon");
const mobileNavigation = document.querySelector(".nav-mobile");

const toggleHamburger = () => {
  const style = getComputedStyle(mobileNavigation);
  //   console.log("ok");
  if (mobileNavigation.style.display === "none") {
    mobileNavigation.style.display = "block";
  } else {
    mobileNavigation.style.display = "none";
  }
};
hamburgerMenu.addEventListener("click", toggleHamburger);

const closeMenuButton = document.querySelector(".close-button");

const closeMobileMenu = () => {
  mobileNavigation.style.display = "none";
};
closeMenuButton.addEventListener("click", closeMobileMenu);

//contact form pop up
const contactButton = document.querySelector(".contact-button");
const contactForm = document.querySelector("section.contact");
const contactButtonHeader = document.querySelector(".contact-a");

const scrollToContact = (e) => {
  e.preventDefault();
  const style = getComputedStyle(contactForm);

  if (style.display === "none") {
    contactForm.style.display = "flex";
  }

  contactForm.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

contactButton.addEventListener("click", scrollToContact);
contactButtonHeader.addEventListener("click", scrollToContact);

//mobile menu contact opens form
const contactMobile = document.querySelector(".contact-mobile-a");

contactMobile.addEventListener("click", function (e) {
  console.log("ok");
  e.preventDefault();
  const style = getComputedStyle(contactForm);

  if (style.display === "none") {
    contactForm.style.display = "flex";
  }

  contactForm.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  //close mobile menu

  if (mobileNavigation.style.display === "block") {
    mobileNavigation.style.display = "none";
  } else {
    mobileNavigation.style.display = "block";
  }
});

//contact form, thank you popup
const submitButtonContact = document.querySelector(".submit-button");
const contactPopupInfo = document.querySelector(".pop-up-alert");

const alertPopup = (e) => {
  e.preventDefault();
  contactPopupInfo.style.display = "flex";
  contactPopupInfo.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

submitButtonContact.addEventListener("click", alertPopup);

//close popup
const closePopupInfo = document.querySelector(".close-popup-icon");

closePopupInfo.addEventListener("click", function () {
  console.log("ok");
  contactPopupInfo.style.display = "none";
});
