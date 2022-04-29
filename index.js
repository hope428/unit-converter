let number = document.getElementById("num").innerText;
let numField = document.getElementById("num");
let lengthP = document.getElementById("length-p");
let volP = document.getElementById("volume-p");
let massP = document.getElementById("mass-p");
let darkModeBtn = document.getElementById("dark-mode");
let details = document.getElementById("detail")

// Function to calculate length measurements
const calcLength = () => {
    let metToFeet = (number * 3.28084).toFixed(3);
    let feetToMet = (number / 3.28084).toFixed(3);
    lengthP.textContent = `${number} meters = ${metToFeet} feet | ${number} feet = ${feetToMet} meters`;
}

// Function to calculate volume measurements
const calcVol = () => {
    let galToLiter = (number * 3.785).toFixed(3);
    let literToGal = (number / 3.785).toFixed(3);
    volP.textContent = `${number} liters = ${literToGal} gallons | ${number} gallons = ${galToLiter} liters`;
}

// Function to calculate mass measurements
const calcMass = () => {
    let kiloToLBS = (number * 2.205).toFixed(3);
    let LBSToKilo = (number / 2.205).toFixed(3);
    massP.textContent = `${number} kilos = ${kiloToLBS} pounds | ${number} pounds = ${LBSToKilo} kilos`;
}

// Function to register user input, update measurement outputs
const getnewNum = () => {
    number = document.getElementById("num").innerText;
    calcLength();
    calcVol();
    calcMass();
}


//Function for dark mode toggle
const darkModeToggle = () => {
        if (details.classList.contains("dark-mode-theme")){
            details.classList.add("light-mode-theme")
            details.classList.remove("dark-mode-theme")
        } else {
            details.classList.add("dark-mode-theme")
            details.classList.remove("light-mode-theme")
        }
}

numField.addEventListener("keyup", getnewNum);
darkModeBtn.addEventListener("click", darkModeToggle);