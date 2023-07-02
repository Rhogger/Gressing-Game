const randomNumber = Math.floor(Math.random() * 11)
let attempts = 0

const btnTry = document.querySelector('#btn-try')
btnTry.addEventListener('click', handleClick)

const btnPlayAgain = document.querySelector('.btn-result')
btnPlayAgain.addEventListener('click', playAgain)

function handleClick() {
  event.preventDefault()

  attempts++

  const inputNumber = document.querySelector('#input-number')

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector('#attempts').innerHTML = attempts
    togglePage()
  } else {
    inputNumber.value = null
  }
}

function playAgain() {
  togglePage()
  location.reload()
}

function togglePage() {
  document.querySelector('.test-page').classList.toggle('hide')
  document.querySelector('.result-page').classList.toggle('hide')
}