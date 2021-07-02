function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseButton = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");
const radioButtons = document.getElementsByName("location");
const firstNameInput = document.getElementById("first");
const firstNameDiv = document.getElementById("first-name");
const lastNameInput = document.getElementById("last");
const lastNameDiv = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const emailDiv = document.getElementById("email-div");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalCloseButton.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//Control if a radio button is selected


//To test Email validity (returns true or false)
function validateEmail(emailAddress){      
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(emailAddress);
} 

// validate modal form user input
submitButton.addEventListener("click", () => {
  if (firstNameInput.value.length < 2) {
    firstNameDiv.setAttribute("data-error-visible", "true");
    firstNameDiv.setAttribute("data-error", "Invalid first name (Insert minimum 2 letters)");
  }

  if (lastNameInput.value.length < 2) {
    lastNameDiv.setAttribute("data-error-visible", "true");
    lastNameDiv.setAttribute("data-error", "Invalid last name (Insert minimum 2 letters)");
  }

  if (validateEmail(emailInput.value) === false) {
    emailDiv.setAttribute("data-error-visible", "true");
    emailDiv.setAttribute("data-error", "Invalid Email Address");
  }
});
