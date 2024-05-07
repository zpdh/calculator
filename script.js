const sum = (x, y) => +x + +y
const subtract = (x, y) => x - y
const divide = (x, y) => x / y
const multiply = (x, y) => x * y


let firstNum = ''
let secondNum = ''
let operator = 'none'


const operate = (x, y, operator) => {
    if (operator == 'none') return
    else if (operator == '+') return sum(x, y)
    else if (operator == '-') return subtract(x, y)
    else if (operator == '×') return multiply(x, y)
    else return divide(x, y)
}


const numBtns = document.querySelectorAll('.numbtn')
const opBtns = document.querySelectorAll('.opbtn')
const clearBtn = document.getElementsByClassName('clearbtn')
const equalBtn = document.getElementsByClassName('equals')
const output = document.getElementById('output')


numBtns.forEach(btn => btn.addEventListener('click', () => updateOutput(btn.textContent)))

opBtns.forEach(btn => btn.addEventListener('click', () => inputOperator(btn.textContent)))

clearBtn[0].addEventListener('click', () => clear())

equalBtn[0].addEventListener('click', () => calculate())


function updateOutput(num) {
    if (output.textContent == 'ㅤ' || output.textContent == 'NaN' || output.textContent == 'Error') {
        output.textContent = ''
        output.textContent += num
    } else output.textContent += num
}

function inputOperator(operation) {
    if (operator !== 'none') return
    else {
    output.textContent += ` ${operation} `
    operator = `${operation}`
}} 

function clear() {
    output.textContent = 'ㅤ'
    firstNum = ''
    secondNum = ''
    operator = 'none'
} 

function calculate() {
    if (output.textContent == 'ㅤ' || operator == 'none') return
    else {
    let operationContent = output.innerHTML
    operationContent = operationContent.split(' ')

    firstNum = operationContent[0]
    operator = operationContent[1]
    secondNum = operationContent[2]

    if (operationContent[1] == '÷' && operationContent[2] == '0') output.textContent = 'Error'

    else {
    output.textContent = Math.round(
        operate(firstNum, secondNum, operator
        ) * 100) / 100
    }
    firstNum = ''
    secondNum = ''
    operator = 'none'
}}
