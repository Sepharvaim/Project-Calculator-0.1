let displayValue = document.querySelector(".display");


let numberOne = document.querySelector("#uno");
let numberTwo = document.querySelector("#due");
let numberThree = document.querySelector("#three");
let numberFour = document.querySelector("#four");
let numberFive = document.querySelector("#five");
let numberSix = document.querySelector("#six");
let numberSeven = document.querySelector("#seven");
let numberEight = document.querySelector("#eight");
let numberNine = document.querySelector("#nine");
let numberZero = document.querySelector("#zero");








numberOne.addEventListener('click', () => {
    displayValue.value += numberOne.innerHTML;
})
numberTwo.addEventListener('click', () => {
    displayValue.value += numberTwo.innerHTML;
})
numberThree.addEventListener('click', () => {
    displayValue.value += numberThree.innerHTML;
})
numberFour.addEventListener('click', () => {
    displayValue.value += numberFour.innerHTML;
})
numberFive.addEventListener('click', () => {
    displayValue.value += numberFive.innerHTML;
})
numberSix.addEventListener('click', () => {
    displayValue.value += numberSix.innerHTML;
})

numberSeven.addEventListener('click', () => {
    displayValue.value += numberSeven.innerHTML;
})
numberEight.addEventListener('click', () => {
    displayValue.value += numberEight.innerHTML;
})
numberNine.addEventListener('click', () => {
    displayValue.value += numberNine.innerHTML;
})
numberZero.addEventListener('click', () => {
    displayValue.value += numberZero.innerHTML;
})
