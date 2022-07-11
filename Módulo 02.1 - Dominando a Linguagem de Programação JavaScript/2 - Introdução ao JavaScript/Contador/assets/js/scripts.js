var currentNumberWrapper = document.getElementById(`currentNumber`)
var incrementButton = document.getElementById('increment-button')
var decrementButton = document.getElementById('decrement-button')
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}

function changeStyle() {
  currentNumber === 10
    ? (incrementButton.disabled = true)
    : (incrementButton.disabled = false)
  currentNumber === -10
    ? (decrementButton.disabled = true)
    : (decrementButton.disabled = false)
  currentNumber < 0
    ? (currentNumberWrapper.style.color = 'red')
    : (currentNumberWrapper.style.color = 'black')
}

incrementButton.addEventListener('click', changeStyle)
decrementButton.addEventListener('click', changeStyle)
