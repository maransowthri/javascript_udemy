document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("mail").addEventListener("blur", validateMail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(e) {
  const enteredName = e.target.value;
  const re = /^[a-zA-Z]{2,10}$/;
  if (!re.test(enteredName)) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
}
function validateZip(e) {
  const enteredZip = e.target.value;
  const re = /^\d{5}(-[\d]{4})?$/;
  if (!re.test(enteredZip)) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
}
function validateMail(e) {
  const enteredMail = e.target.value;
  const re = /^\w{2,10}@\w{2,5}\.[a-zA-Z]{2,5}$/;
  if (!re.test(enteredMail)) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
}
function validatePhone(e) {
  const enterePhone = e.target.value;
  const re = /^\+?([\d]{2})?\s?[\d]{10}$/;
  if (!re.test(enterePhone)) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
    e.target.classList.add("is-valid");
  }
}
