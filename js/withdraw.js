document.getElementById("btn-withdraw").addEventListener("click", function () {
  let amountToWithdraw = getInputFieldValueById("withdraw-field");
  let currentWithdrawanAmount = getTextElementValueById("withdraw-total");
  let currentBalance = getTextElementValueById("balance-total");
  
  if (currentBalance < amountToWithdraw) {
    alert("YOU DO NOT HAVE ENOUGH MONEY");
  } else {
    let balance = currentBalance - amountToWithdraw;
    setTextElementVlueById("balance-total", balance);
    let withdrawnAmount = currentWithdrawanAmount + amountToWithdraw;
    setTextElementVlueById("withdraw-total", withdrawnAmount);
  }
});
