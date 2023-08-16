

function handleClick(event) {
  event.preventDefault() // não deixa a tela carregar após o click do button

  const inputNumber = document.querySelector('#inputNumber') //recebendo número fornecido no input

  console.log(inputNumber.value)
}