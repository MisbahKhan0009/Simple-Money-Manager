function getInputFieldValueById(inputId) {
  let inputField = document.getElementById(inputId);
  let inputFieldValueString = inputField.value;
  let inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  let element = document.getElementById(elementId);
  let elementValueString = element.innerText;
  let elementValue = parseFloat(elementValueString);
  return elementValue;
}

function setTextElementVlueById(elementId, newValue) {
  let textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
