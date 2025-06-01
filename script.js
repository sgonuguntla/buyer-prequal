document.getElementById("prequalForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const income = parseFloat(document.getElementById("income").value);
  const credit = parseInt(document.getElementById("creditScore").value);
  const debt = parseFloat(document.getElementById("debt").value);
  const downPayment = parseFloat(document.getElementById("downPayment").value);
  const homePrice = parseFloat(document.getElementById("homePrice").value);

  let dti = (debt * 12) / income;
  let loanAmount = homePrice - downPayment;

  let message = "";
  if (credit >= 620 && dti <= 0.4 && downPayment >= homePrice * 0.05) {
    message = "✅ You appear to be pre-qualified! Contact a loan officer to proceed.";
  } else {
    message = "⚠️ You may not currently qualify. Consider improving credit, lowering debt, or increasing down payment.";
  }

  document.getElementById("result").innerText = message;
});
