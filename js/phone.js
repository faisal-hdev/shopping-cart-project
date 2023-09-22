document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    // console.log("plus clicked");
    const phoneNumberField = document.getElementById("phone-number-field");
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    // console.log("minus cli clicked");
  });
