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
});

// withdraw button approval
// get the deposit button
document.getElementById("withdraw-btn").addEventListener("click", function () {
// get the withdraw input Id
const withdrawField = document.getElementById("input-withdraw");
// get the withdraw amount string value. (remember always all number value stay string)
});
