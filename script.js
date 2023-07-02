const randomNumber = Math.floor(Math.random() * 11)
let attempts = 0

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
  document.querySelector('.test-page').classList.add('hide')
  document.querySelector('.result-page').classList.remove('hide')
}