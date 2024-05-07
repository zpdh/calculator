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
const decimal = document.getElementById('decimal')

numBtns.forEach(btn => btn.addEventListener('click', () => updateOutput(btn.textContent)))

opBtns.forEach(btn => btn.addEventListener('click', () => inputOperator(btn.textContent)))

decimal.addEventListener('click', () => inputDecimal())

clearBtn[0].addEventListener('click', () => clear())

equalBtn[0].addEventListener('click', () => calculate())


function updateOutput(num) {
    if (output.textContent == 'ㅤ' || output.textContent == 'NaN' || output.textContent == 'Infinity') {
        output.textContent = ''
        output.textContent += num
    } else output.textContent += num
    if (operator == 'none') firstNum = output.textContent
    if (operator !== 'none') secondNum = output.textContent.split(operator).pop()
}

function inputOperator(operation) {
    if (operator !== 'none') return
    else {
    firstNum = output.textContent
    output.textContent += ` ${operation} `
    operator = `${operation}`
}} 

function inputDecimal() {
    if (operator == 'none') {
    if (firstNum.includes('.')) return

    else {
        firstNum += '.'
        output.textContent += '.'

    }} if (operator !== 'none') {
    if (secondNum.includes('.'))  return

    else {
        secondNum += '.'
        output.textContent += '.'

    }}

}
function clear() {
    output.textContent = 'ㅤ'
    firstNum = ''
    secondNum = ''
    operator = 'none'
} 

function calculate() {
    if (output.textContent == 'ㅤ' || operator == 'none') return
    output.textContent = Math.round(
        operate(firstNum, secondNum, operator
        ) * 100) / 100
    firstNum = ''
    secondNum = ''
    operator = 'none'
}
