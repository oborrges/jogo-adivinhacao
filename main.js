//VARIÁVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAtempts = 1

//EVENTOS
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e) {
  if(e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  } 
})


//FUNÇÕES
function handleTryClick(event) {
  event.preventDefault() // não deixa a tela carregar após o click do button

  const inputNumber = document.querySelector('#inputNumber') //recebendo número fornecido no input

  if(Number(inputNumber.value == randomNumber)){
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAtempts} tentativas!`
  }
  inputNumber.value = ""
  xAtempts++
}

function handleResetClick() {
  toggleScreen()
  xAtempts = 1

  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

/* DESAFIOS 

-REFATURAR A FUNÇÃO DE ENTER
-FAZER UM LIMITE DE 0 E 10 (NÉM ABAIXO NÉM A CIMA) ALERTA
- ATIVAR O BOTÃO APENAS SE TIVER UM NÚMERO
*/
