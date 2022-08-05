const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let inputValue = "";

function convertBtn() {
    inputValue = inputEl.innerHTML;
    convertLength()
    convertVolume()
    convertMass()
}

function convertLength() {
    let meters = (inputValue * 0.304).toFixed(3)
    let feet = (inputValue * 3.281).toFixed(3)
    lengthEl.textContent = `${inputValue} meters = ${feet} feet |
     ${inputValue} feet = ${meters} meters`
}

function convertVolume() {
    let liters = (inputValue * 0.264).toFixed(3)
    let gallons = (inputValue * 3.785).toFixed(3)
    volumeEl.textContent = `${inputValue} liters = ${gallons} gallons |
    ${inputValue} gallons = ${liters} liters`
}

function convertMass() {
    let kilos =  (inputValue * 0.453).toFixed(3)
    let pounds = (inputValue *2.204).toFixed(3)
    massEl.textContent = `${inputValue} kilos = ${kilos} pounds |
     ${inputValue} pounds = ${pounds} kilos`
}