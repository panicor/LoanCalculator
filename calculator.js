window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {

  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let vals = {amount: 100, years: 5, rate: 0.4};
  let amount = document.querySelector("#loan-amount");
  amount.value = vals.amount;
  let years = document.querySelector("#loan-years");
  years.value = vals.years;
  let rate = document.querySelector("#loan-rate");
  rate.value = vals.rate;

  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  

 let currentVals = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(currentVals)); 
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthRate = (values.rate / 100) / 12;
  let exp = Math.floor(values.years * 12);
  let mathEq = ((monthRate * values.amount)/(1 - Math.pow((1 + monthRate), -exp))).toFixed(2);

  if(mathEq === "NaN"){
    throw new Error("Please enter a number");
  }

  return mathEq; 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyHtml = document.querySelector("#monthly-payment");
  monthlyHtml.innerText = `$${monthly}`;
}
