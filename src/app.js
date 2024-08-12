/* eslint-disable */
import "bootstrap";
import "./style.css";

let formErrors = true;
//checkData = document.getElementById("checkData");
let sendForm = document.getElementById("sendForm");

///// Defining Paths ///////

let exampleInputNumber = document.getElementById("exampleInputNumber");
let exampleInputCVC = document.getElementById("exampleInputCVC");
let exampleInputFirstName = document.getElementById("exampleInputFirstName");
let exampleInputLastName = document.getElementById("exampleInputLastName");
let exampleInputAmount = document.getElementById("exampleInputAmount");
let exampleInputCity = document.getElementById("exampleInputCity");
let exampleInputState = document.getElementById("exampleInputState");
let comment = document.getElementById("comment");
let exampleInputFirstCode = document.getElementById("exampleInputFirstCode");
window.onload = function() {
  alert("Proceda a llenar los campos adecuadamente.");
};
////// Error Functioms /////

const mainErrorMsg = () => {
  checkCardNumber();
  checkCVC();
  checkFirstName();
  checkLastName();
  checkAmount();
  checkCity();
  checkState();
  checkComment();
  checkPostal();
};

////// Looking for Errors ///////
/* Se agrea if con el size para hacer una validacion inicial de inputs vacios y evitar
enviar un formulario default sin datos */

const checkCardNumber = () => {
  let size = exampleInputNumber.value.length;
  let text = exampleInputNumber.value;
  if (size == 0) {
    exampleInputNumber.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[0-9]+/;
    if (reg.test(char) === false || size < 16) {
      exampleInputNumber.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputNumber.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

const checkCVC = () => {
  let size = exampleInputCVC.value.length;
  let text = exampleInputCVC.value;
  if (size == 0) {
    exampleInputCVC.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[0-9]+/;
    if (reg.test(char) === false || size != 3) {
      exampleInputCVC.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputCVC.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

const checkFirstName = () => {
  let size = exampleInputFirstName.value.length;
  let text = exampleInputFirstName.value;
  if (size == 0) {
    exampleInputFirstName.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[a-zA-Z ñ]+/;
    if (reg.test(char) === false || size === 0) {
      exampleInputFirstName.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputFirstName.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

const checkLastName = () => {
  let size = exampleInputLastName.value.length;
  let text = exampleInputLastName.value;
  if (size == 0) {
    exampleInputLastName.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[a-zA-Z ñ]+/;
    if (reg.test(char) === false || size === 0) {
      exampleInputLastName.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputLastName.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};
const checkAmount = () => {
  let size = exampleInputAmount.value.length;
  let text = exampleInputAmount.value;
  if (size == 0) {
    exampleInputAmount.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[0-9]+/;
    if (reg.test(char) === false || size === 0) {
      exampleInputAmount.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputAmount.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

/* Flag control invertido por estructura de la funcion */

const checkCity = () => {
  let size = exampleInputCity.value.length;
  let text = exampleInputCity.value;
  if (size == 0) {
    exampleInputCity.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[a-zA-Z ñ]+/;
    if (reg.test(char) === false || size === 0) {
      exampleInputCity.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputCity.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

const checkState = () => {
  if (exampleInputState.value != "Pick a State") {
    exampleInputState.classList.remove("alert-danger");
    formErrors = false;
  } else {
    exampleInputState.classList.add("alert-danger");
    formErrors = true;
  }
};

const checkComment = () => {
  let size = comment.value.length;
  let text = comment.value;
  if (size == 0) {
    comment.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[a-zA-Z ñ]+/;
    if (reg.test(char) === false || size === 0) {
      comment.classList.add("alert-danger");
      formErrors = true;
    } else {
      comment.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

const checkPostal = () => {
  let size = exampleInputFirstCode.value.length;
  let text = exampleInputFirstCode.value;
  if (size == 0) {
    exampleInputFirstCode.classList.add("alert-danger");
  }
  for (let char of text) {
    const reg = /^[a-zA-Z0-9 ñ]+/;
    if (reg.test(char) === false || size === 0) {
      exampleInputFirstCode.classList.add("alert-danger");
      formErrors = true;
    } else {
      exampleInputFirstCode.classList.remove("alert-danger");
      formErrors = false;
    }
  }
};

//////// Event Handlers /////////
sendForm.addEventListener("submit", e => {
  mainErrorMsg();
  if (formErrors === true) {
    document.querySelector(".alert").classList.remove("d-none");
    e.preventDefault();
  } else alert("Datos enviados satisfactoriamente.");
});

exampleInputNumber.addEventListener("change", checkCardNumber);
exampleInputCVC.addEventListener("change", checkCVC);
exampleInputFirstName.addEventListener("change", checkFirstName);
exampleInputLastName.addEventListener("change", checkLastName);
exampleInputAmount.addEventListener("change", checkAmount);
exampleInputCity.addEventListener("change", checkCity);
exampleInputState.addEventListener("change", checkState);
comment.addEventListener("change", checkComment);
exampleInputFirstCode.addEventListener("change", checkPostal);
