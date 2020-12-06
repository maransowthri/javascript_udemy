const form = document.querySelector("#loan-form");
form.addEventListener("submit", (e) => {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "block";

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

function calculateResults() {
  document.querySelector("#results").style.display = "block";
  document.querySelector("#loading").style.display = "none";
  const amountEl = document.querySelector("#amount");
  const percentageEl = document.querySelector("#interest");
  const yearsEl = document.querySelector("#years");

  const monthlyPaymentEl = document.querySelector("#monthly-payment");
  const totalPaymentEl = document.querySelector("#total-payment");
  const totalInterestEl = document.querySelector("#total-interest");

  const amountVal = parseFloat(amountEl.value);
  const percentageVal = parseFloat(percentageEl.value);
  const yearsVal = parseFloat(yearsEl.value);

  const totalAmount = amountVal * Math.pow(1 + percentageVal / 100, yearsVal);

  monthlyPaymentEl.value = (totalAmount / yearsVal / 12).toFixed(2);
  totalPaymentEl.value = totalAmount.toFixed(2);
  totalInterestEl.value = (totalAmount - amountVal).toFixed(2);
  if (!isFinite(totalAmount)) {
    errorAlert("Invalid numbers found");
  }
}

function errorAlert(msg) {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(msg));

  const cardEl = document.querySelector(".card");
  const headingEl = document.querySelector(".heading");

  cardEl.insertBefore(errorDiv, headingEl);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
