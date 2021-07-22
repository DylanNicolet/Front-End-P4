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
const modalForm = document.getElementById("modal-form");
const modalInput = document.getElementsByClassName("text-control");
const successMessage = document.getElementById("success-message");
const modalCloseButton = document.querySelector(".close");
const modalBody = document.getElementsByClassName("modal-body");
const submitButton = document.querySelector(".btn-submit");
const successCloseButton = document.getElementById("btn-success");
const radioButtons = document.getElementsByName("location");
const firstNameInput = document.getElementById("first");
const firstNameDiv = document.getElementById("first-name");
const lastNameInput = document.getElementById("last");
const lastNameDiv = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const emailDiv = document.getElementById("email-div");
const birthdateInput = document.getElementById("birthdate");
const birthdateDiv = document.getElementById("birthdate-div");
const tournamentAmountInput = document.getElementById("quantity");
const tournamentAmountDiv = document.getElementById("quantity-div");
const locationDiv = document.getElementById("location-div");
const checkboxOneInput = document.getElementById("checkbox1");
const checkboxDiv = document.getElementById("checkbox-div");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalCloseButton.addEventListener("click", () => {
  modalbg.style.display = "none";
  modalForm.reset();
  removeValidationWarning(firstNameDiv);
  removeValidationWarning(lastNameDiv);
  removeValidationWarning(emailDiv);
  removeValidationWarning(birthdateDiv);
  removeValidationWarning(tournamentAmountDiv);
  removeValidationWarning(locationDiv);
  removeValidationWarning(checkboxDiv);
  modalForm.style.opacity = "1";
  successMessage.style.display = "none";
  successCloseButton.style.display = "none";
});

// validate EMail (returns true or false)
function validateEmail(emailAddress){      
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(emailAddress);
};

// validate Birthdate (returns true of false)
function validateBirthdate(birthdate){
  let birthdatePattern = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
  return birthdatePattern.test(birthdate);
};

//controls that birth year is not in the future
function validateBirthYear(birthdate){
  const currentTime = new Date().getTime();
  const inputDate = new Date(birthdate).getTime();
  if (currentTime > inputDate) {
    return true;
  } else {
    return false;
  }
}

// validate if a location radio button is selected
function validateLocationCheckbox(){
  const checkboxs = document.getElementsByName("location");
  for(let i=0; i<checkboxs.length; i++){
    if(checkboxs[i].checked){
      return true;
    }
  }
};

// functionality for the success message close button
successCloseButton.addEventListener("click", () => {
  modalbg.style.display = "none";
  modalForm.reset();
  removeValidationWarning(firstNameDiv);
  removeValidationWarning(lastNameDiv);
  removeValidationWarning(emailDiv);
  removeValidationWarning(birthdateDiv);
  removeValidationWarning(tournamentAmountDiv);
  removeValidationWarning(locationDiv);
  removeValidationWarning(checkboxDiv);
  modalForm.style.opacity = "1";
  successMessage.style.display = "none";
  successCloseButton.style.display = "none";
});

// removes visual warning for invalid input
function removeValidationWarning(element) {
  element.removeAttribute("data-error-visible");
  element.removeAttribute("data-error");
}

// add visual warning for invalid input
function addValidationWarning(element, message) {
  element.setAttribute("data-error-visible", "true");
  element.setAttribute("data-error", message);
}

// provide visual feedback for invalid input
submitButton.addEventListener("click", () => {
  if (firstNameInput.value.length < 2) {
    addValidationWarning(firstNameDiv, "Invalid first name (Insert minimum 2 letters)");
  } else{
    removeValidationWarning(firstNameDiv);
  };

  if (lastNameInput.value.length < 2) {
    addValidationWarning(lastNameDiv, "Invalid last name (Insert minimum 2 letters)");
  } else{
    removeValidationWarning(lastNameDiv);
  };

  if (!validateEmail(emailInput.value)) {
    addValidationWarning(emailDiv, "Invalid Email Address");
  } else{
    removeValidationWarning(emailDiv);
  };

  if (!validateBirthdate(birthdateInput.value) || !validateBirthYear(birthdateInput.value)){
    addValidationWarning(birthdateDiv, "Please enter a valid birthdate");
  } else{
    removeValidationWarning(birthdateDiv);
  }

  if (tournamentAmountInput.value.length == 0){
    addValidationWarning(tournamentAmountDiv, "Please enter number of tournaments attended");
  } else{
    removeValidationWarning(tournamentAmountDiv);
  }

  if (!validateLocationCheckbox()){
    addValidationWarning(locationDiv, "Please select a location");
  } else{
    removeValidationWarning(locationDiv);
  };

  if (!checkboxOneInput.checked){
    addValidationWarning(checkboxDiv, "Please check Terms and Conditions");
  } else{
    removeValidationWarning(checkboxDiv);
  };
});

//validate user input and display success message
function validate(){
  if (checkboxOneInput.checked && validateLocationCheckbox() && validateBirthdate(birthdateInput.value) && validateEmail(emailInput.value) && validateBirthYear(birthdateInput.value)) {
    modalForm.style.opacity = "0";
    successMessage.style.display = "flex";
    successCloseButton.style.display = "block";
  };
};