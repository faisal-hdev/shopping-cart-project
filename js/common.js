function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const phoneCurrentTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(phoneCurrentTotalString);
  return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubtotal() {
  // Calculate total
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total-amount", currentSubTotal);

  // Calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const textAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", textAmount);

  // Final amount
  const finalAmount = currentSubTotal + textAmount;
  setTextElementValueById("final-total-amount", finalAmount);
}
