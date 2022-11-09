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
let previousOperand = ""
console.log(equalsButton)
equalsButton.addEventListener("click", function() {
    previousOperator = operatorSelection
        previousOperand = evaluate(currentOperand, previousOperand)
        console.log(previousOperand)

        currentOperand = ""
        prevOperand = ""
        currentOperandEl.textContent = ""
        previousOperandEl.textContent = `${previousOperand}`
        currentOperand = ""
        prevOperand = ""
        operatorSelection = ""
        previousOperator = ""
        answer = 0
        previousOperand = ""
    })

deleteButton.addEventListener("click", function(){
    currentOperand = currentOperand.slice(0,-1)
    currentOperandEl.textContent = currentOperand
})

allClearButton.addEventListener("click", function(){
    currentOperand = ""
    prevOperand = ""
    currentOperandEl.textContent = ""
    previousOperandEl.textContent = ""
})

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
    if(previousOperand === ""){
        previousOperand = currentOperand
        previousOperator = operatorSelection
        operatorSelection = e.target.textContent

        currentOperand = ""
        prevOperand = ""
        currentOperandEl.textContent = ""
        



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
        currentOperandEl.textContent = ""
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