"use strict";

document.addEventListener("DOMContentLoaded", start);

let amountCustomers = [];
let queueSize;
let customersNow;

function start() {
  console.log("start");

  //get 40 'numbers of customers'
  for (let i = 0; i < 40; i++) {
    customersNow = getNumberOfCustomers();
    amountCustomers.push(customersNow);
  }

  //get new customer count - also starts loop
  updateBars();
}

function updateBars() {
  newCustumerCount();
  styleBars();

  setTimeout(updateBars, 1000);
}

function newCustumerCount() {
  console.log("newCustomerCount");

  //update how many customers there are
  customersNow = getNumberOfCustomers();
  //update array with new number
  amountCustomers.shift();
  amountCustomers.push(customersNow);
}

function styleBars() {
  //style all the bars with right hight and color
  const bars = document.querySelectorAll(".bar");
  let numArr = 0;
  bars.forEach((bar) => {
    let thisAmount = amountCustomers[numArr];

    //style height of bar
    bar.style.height = thisAmount + "px";

    //set color according to how many customers
    if (thisAmount < 10) {
      bar.classList = "green bar";
    } else if (thisAmount > 20) {
      bar.classList = "red bar";
    } else {
      bar.classList = "yellow bar";
    }
    numArr++;
  });
}

function getNumberOfCustomers() {
  //gives random number
  return Math.floor(Math.random() * 32);
}
