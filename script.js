const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-evaluate]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandEl = document.querySelector('[data-previous-operand]');
const currentOperandEl = document.querySelector('[data-current-operand]');

let currentOperand = ""
let prevOperand = ""
let operatorSelection = ""
let previousOperator = ""
let answer = 0


numberButtons.forEach((number) => number.addEventListener("click", function(e){
setNumber(e.target.textContent)
currentOperandEl.textContent = currentOperand
console.log(currentOperand)
console.log(prevOperand)
}))

function setNumber(num){
    currentOperand += num
    
}


operationButtons.forEach((operator) => operator.addEventListener("click", function(e){
    if(previousOperandEl.textContent === ""){
        previousOperand = currentOperand
        previousOperator = operatorSelection
        operatorSelection = e.target.textContent

        currentOperand = ""
        prevOperand = ""
        



        console.log(previousOperand)
        console.log(currentOperand)
        console.log(operatorSelection)
    }
    else{
        previousOperator = operatorSelection
        operatorSelection = e.target.textContent
        previousOperand = evaluate(currentOperand, previousOperand)
        console.log(previousOperand)

        currentOperand = ""
        prevOperand = ""
    }
    previousOperandEl.textContent = `${previousOperand} ${operatorSelection}`
}))




function evaluate(currentOperand, prevOperand){
    let previousNum = Number(prevOperand)
    let currentNum = Number(currentOperand)
    if(previousOperator === "+"){
    previousNum += currentNum
    return previousNum}
    else if(previousOperator === "-"){
        previousNum -= currentNum
        return previousNum}
    else if (previousOperator === "*"){
        previousNum *= currentNum
        return previousNum}
    else if (previousOperator === "÷"){
        previousNum /= currentNum
        return previousNum}
    }
    

console.log(currentOperand)
console.log(prevOperand)