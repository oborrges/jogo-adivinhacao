//VARIÁVEIS
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let btnTry = document.querySelector("#btnTry")
let btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//EVENTOS
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleEnterKeyPressed)

//FUNÇÕES
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  const guessedNumber = Number(inputNumber.value)
  
  if (inputNumber.value.trim() === "") {
    alert("Por favor, insira um número antes de tentar.")
    return;
  }
  
  if (isNaN(guessedNumber) || guessedNumber < 0 || guessedNumber > 10) {
    alert("Por favor, utilize um número válido entre 0 e 10.")
    return
  }
  
  if (guessedNumber === randomNumber) {
    toggleScreen()
    if (xAttempts === 1) {
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa!`
    } else {
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }
  } else {
    if (guessedNumber < randomNumber) {
      alert("Ainda não é esse, continue tentando...")
    } 
  }
  
  inputNumber.value = ""
  xAttempts++
}  


function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnterKeyPressed(enterPressed) {
  if (enterPressed.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}


/* DESAFIOS 

-REFATURAR A FUNÇÃO DE ENTER 🆗
-FAZER UM LIMITE DE 0 E 10 (NÉM ABAIXO NÉM A CIMA) ALERTA🆗
- ATIVAR O BOTÃO APENAS SE TIVER UM NÚMERO🆗
- AO ACERTAR EM UMA TENTATIVA A MENSAGEM NÃO DEVE APARECER EM PLURAL🆗
*/
