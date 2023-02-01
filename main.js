document.getElementById('stone').addEventListener('click', () => gameLogic(1))
document.getElementById('paper').addEventListener('click', () => gameLogic(2))
document.getElementById('scissors').addEventListener('click', () => gameLogic(3))

const rock = 1
const paper = 2
const scissor = 3

// storage number of times the player win draw or loss.
let win = []
let draw = []
let loss = []

const resultColor = document.querySelector('.machine-area__selection')

const writeHTML = ({ resultText, iconMachine, iconResult, color }) => {
  document.getElementById('resultado').innerHTML = resultText
  document.getElementById('machine').innerHTML = iconMachine
  document.getElementById('result-game').innerHTML = iconResult
  resultColor.className = `machine-area__selection ${color}`
}

const resetGame = () => {
  win = []
  draw = []
  loss = []
}

const machineSelection = () => {
  // return a ramdon selection beetwen 1 - 3
  const machine = Math.floor(Math.random() * 3 + 1)
  let select
  let result
  if (machine === 1) {
    select = "<i class='fas fa-hand-rock icon-machine'></i>"
    result = "<p id='result-game'>Rock</p>"
  } else if (machine === 2) {
    select = "<i class='fas fa-hand-paper icon-machine'></i>"
    result = "<p id='result-game'>Paper</p>"
  } else {
    select = "<i class='fas fa-hand-scissors icon-machine'></i>"
    result = "<p id='result-game'>Scissor</p>"
  }
  return {
    select,
    result,
    machine
  }
}

function gameLogic (user) {
  const { select, result, machine } = machineSelection()
  if (user === machine) {
    writeHTML({ resultText: 'You have tied', iconMachine: select, iconResult: result, color: 'yellow' })
    draw.push(1)
  } else if (
    (user === rock && machine === scissor) ||
    (user === paper && machine === rock) ||
    (user === scissor && machine === paper)
  ) {
    writeHTML({ resultText: 'You have Won', iconMachine: select, iconResult: result, color: 'green' })
    win.push(1)
  } else {
    writeHTML({ resultText: 'You have lost', iconMachine: select, iconResult: result, color: 'red' })
    loss.push(1)
  }
  document.getElementById('win-result').innerHTML = win.length
  document.getElementById('loss-result').innerHTML = loss.length
  document.getElementById('draw-result').innerHTML = draw.length

  if (win.length === 3) {
    resetGame()
    alert('Has ganado a la máquina')
  } else if (loss.length === 3) {
    resetGame()
    alert('Más suerte para la próxima')
  } else {
    console.log('sigue jugando')
  }
}
