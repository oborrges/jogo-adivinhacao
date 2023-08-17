const randomNumber = Math.round(Math.random() * 10)
let xAtempts = 1

function handleClick(event) {
  event.preventDefault() // não deixa a tela carregar após o click do button

  const inputNumber = document.querySelector('#inputNumber') //recebendo número fornecido no input

  if(Number(inputNumber.value == randomNumber)){
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAtempts} tentativas!`

  }

  xAtempts++
}

function newGameClick(event) {
  document.querySelector(".screen2").classList.add("hide")
  document.querySelector(".screen1").classList.remove("hide")
}