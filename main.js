let stone = document.getElementById("stone").addEventListener("click", () => game(1));
let paper = document.getElementById("paper").addEventListener("click", () => game(2));
let scissors = document.getElementById("scissors").addEventListener("click", () => game(3));

const piedra = 1;
const papel = 2;
const tijera = 3;

//storage number of times the player win draw or loss.
let win = [];
let draw = [];
let loss = [];

const resultColor = document.querySelector(".machine-area__selection");

const writeHTML = (result, icon, iconResult, color) =>
{
    document.getElementById("resultado").innerHTML = result;
    document.getElementById("machine").innerHTML = icon;
    document.getElementById("result-game").innerHTML = iconResult;
    resultColor.className = `machine-area__selection ${color}`;
};

function game(user)
{
    let maquina = Math.floor(Math.random() * 3 + 1);
    let select;
    let result;
    if (maquina === 1){
        select = "<i class='fas fa-hand-rock icon-machine'></i>";
        result = "<p id='result-game'>Piedra</p>";
    }else if (maquina === 2){
        select = "<i class='fas fa-hand-paper icon-machine'></i>";
        result = "<p id='result-game'>Papel</p>";
    }else {
        select = "<i class='fas fa-hand-scissors icon-machine'></i>";
        result = "<p id='result-game'>Tijera</p>";
    }
    if (user === maquina)
    {
        writeHTML("Has empatado", select, result, "yellow");
        draw.push(1);
    }else if (
        (user === piedra && maquina === tijera) ||
        (user === papel && maquina === piedra) ||
        (user === tijera && maquina === papel)
        )
    {
        writeHTML("Has ganado", select, result, "green");
        win.push(1);
    }else
    {
        writeHTML("Has perdido", select, result, "red");
        loss.push(1);
    }
    document.getElementById("win-result").innerHTML = win.length;
    document.getElementById("loss-result").innerHTML = loss.length;
    document.getElementById("draw-result").innerHTML = draw.length;

    (win.length === 3) ? alert("Has ganado a la máquina") : console.log("sigue jugando");
    (loss.length === 3) ? alert("Más suerte para la próxima") : console.log("sigue jugando");
}