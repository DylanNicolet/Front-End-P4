function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function removeValidationWarning(element) {
  element.removeAttribute("data-error-visible");
  element.removeAttribute("data-error");
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalForm = document.getElementById("modal-form");
const modalCloseButton = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");
const radioButtons = document.getElementsByName("location");
const firstNameInput = document.getElementById("first");
const firstNameDiv = document.getElementById("first-name");
const lastNameInput = document.getElementById("last");
const lastNameDiv = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const emailDiv = document.getElementById("email-div");
const birthdateInput = document.getElementById("birthdate");
const birthdateDiv = document.getElementById("birthdate-div");
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
  removeValidationWarning(locationDiv);
  removeValidationWarning(checkboxDiv);
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

// validate if a location radio button is selected
function validateLocationCheckbox(){
  const checkboxs = document.getElementsByName("location");
  for(let i=0; i<checkboxs.length; i++){
    if(checkboxs[i].checked){
      return true;
    }
  }
};


// validate modal form user input
submitButton.addEventListener("click", () => {
  if (firstNameInput.value.length < 2) {
    firstNameDiv.setAttribute("data-error-visible", "true");
    firstNameDiv.setAttribute("data-error", "Invalid first name (Insert minimum 2 letters)");
  } else{
    removeValidationWarning(firstNameDiv);
  };

  if (lastNameInput.value.length < 2) {
    lastNameDiv.setAttribute("data-error-visible", "true");
    lastNameDiv.setAttribute("data-error", "Invalid last name (Insert minimum 2 letters)");
  } else{
    removeValidationWarning(lastNameDiv);
  };

  if (!validateEmail(emailInput.value)) {
    emailDiv.setAttribute("data-error-visible", "true");
    emailDiv.setAttribute("data-error", "Invalid Email Address");
  } else{
    removeValidationWarning(emailDiv);
  };

  if (!validateBirthdate(birthdateInput.value)){
    birthdateDiv.setAttribute("data-error-visible", "true");
    birthdateDiv.setAttribute("data-error", "Please enter a valid birthdate");
  } else{
    removeValidationWarning(birthdateDiv);
  }

  if (!validateLocationCheckbox()){
    locationDiv.setAttribute("data-error-visible", "true");
    locationDiv.setAttribute("data-error", "Please select a location");
  } else{
    removeValidationWarning(locationDiv);
  };

  if (checkboxOneInput.checked === false){
    checkboxDiv.setAttribute("data-error-visible", "true");
    checkboxDiv.setAttribute("data-error", "Please check Terms and Conditions");
  } else{
    removeValidationWarning(checkboxDiv);
  };
});

function validate(){
  if (checkboxOneInput.checked === false || !validateLocationCheckbox() || !validateBirthdate(birthdateInput.value)) {
    return false;
  } else{
    return true;
  }
};