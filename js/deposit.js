document.getElementById("btn-deposit").addEventListener("click", function () {
  let amountToDeposit = getInputFieldValueById("deposit-field");
  let currentDepositedAmount = getTextElementValueById("deposit-total");
  let depositedAmount = currentDepositedAmount + amountToDeposit;
  setTextElementVlueById("deposit-total", depositedAmount);
  let currentBalance = getTextElementValueById("balance-total");
  let balance = currentBalance + amountToDeposit;
  setTextElementVlueById("balance-total", balance);
});
