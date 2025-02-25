function getInputValueID(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}

function getTextValueID(inputId) {
    return parseFloat(document.getElementById(inputId).innerText);
}

function setInnerText(inputId, value) {
    document.getElementById(inputId).innerText = value;
}

function handleToggle(toggleId, display) {
    document.getElementById(toggleId).style.display = display;
}