"use strict";
// deposit button approval
// get the deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the deposit input Id
  const depositField = document.getElementById("input-deposit");
  // get the amount string value. (remember always all number value stay string)
  const newDepositAmountString = depositField.value;
  // convert string value
  const newDepositAmount = parseFloat(newDepositAmountString);

  //   get the current deposit total amount
  // get the total deposit Id
  const depositTotalElement = document.getElementById("deposit-total");
  // get the total string text. (remember always all number value stay string)
  const previousDepositTotalString = depositTotalElement.innerText;
  // get convert string value
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // get current total
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  // get current balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // clear the deposit input field
  document.getElementById("input-deposit").value = "";
});

// withdraw button approval
// get the deposit button
document.getElementById("withdraw-btn").addEventListener("click", function () {
// get the withdraw input Id
const withdrawField = document.getElementById("input-withdraw");
// get the withdraw amount string value. (remember always all number value stay string)
const newWithdrawAmountString = withdrawField.value;
// convert string value
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//   get the current withdraw total amount
  // get the total withdraw Id
  const withdrawTotalElement = document.getElementById('withdraw')
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // balanced total decreased withdraw total
  const balanceTotalElement = document.getElementById('balance-total')
  const previousBalancedTotalString = balanceTotalElement.innerText;
  const previousBalancedTotal = parseFloat(previousBalancedTotalString);
  const newBalancedTotal = previousBalancedTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalancedTotal;

 // clear the deposit input field
 document.getElementById("input-withdraw").value = "";

  // document.getElementById('resetButton').addEventListener('click'), function () {
  //   document.getElementById("deposit-total").innerText = 0;
  //   document.getElementById("balance-total").innerText = 0;
  //   document.getElementById("withdraw").innerText = 0;
  // };


  const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", function () {
  document.getElementById("deposit-total").innerText = 0;
    document.getElementById("balance-total").innerText = 1250;
    document.getElementById("withdraw").innerText = 0;
});
});

