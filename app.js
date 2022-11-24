const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-button");
const errMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
// console.log(noOfNotes);

const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideErrorMessage();
  if (parseInt(billAmount.value) > 0) {
    // console.log(billAmount.value);
    if (parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
      let amountToBeReturned =
        parseInt(cashGiven.value) - parseInt(billAmount.value);
      console.log(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showErrorMessage(
        "The provided cash must at least be equal to the bill amount. "
      );
    }
  } else {
    showErrorMessage("The bill amount should be greater than 0");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < denominations.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / denominations[i]);
    amountToBeReturned %= denominations[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideErrorMessage() {
  errMsg.style.display = "none";
}

function showErrorMessage(message) {
  errMsg.style.display = "block";
  errMsg.innerText = message;
}
