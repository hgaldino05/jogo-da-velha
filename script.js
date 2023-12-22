//funcoes inicio.html
function updateNome(pId, inputId) {
  var inputValue = document.getElementById(inputId).value;
  document.getElementById(pId).innerText = inputValue;
}

function goToIndex() {
  if (
    document.getElementById("inputJ1").value === "" ||
    document.getElementById("inputJ2").value === ""
  ) {
    alert(
      "Por favor, insira os nomes dos jogadores antes de prosseguir."
    );
    return;
  }
  localStorage.setItem(
    "jogador1",
    document.getElementById("inputJ1").value
  );
  localStorage.setItem(
    "jogador2",
    document.getElementById("inputJ2").value
  );
  location.href = "index.html";
}

function inicioActions(pId, inputId1, inputId2){
  updateNome(pId, inputId1);
  updateNome(pId, inputId2);
  goToIndex();
}
// funcoes index.html
function tabuleiro() {
  var jogo = document.getElementById("jogo");
          var turno = "X";

          for (var i = 0; i < 9; i++) {
            var celula = document.createElement("div");
            celula.classList.add("celulas");
            celula.addEventListener("click", function (e) {
              if (!e.target.textContent) {
                e.target.textContent = turno;
                turno = turno === "X" ? "O" : "X";
              }
            });
            jogo.appendChild(celula);
          }
}

function updatePlayers() {
  document.getElementById("spanJ1").innerText =
    localStorage.getItem("jogador1");
  document.getElementById("spanJ2").innerText =
    localStorage.getItem("jogador2");
}

function resetGame() {
  var resetarGame = document.getElementById("reset-button");

        resetarGame.addEventListener("click", function(){
          location.reload();
        })
}

// function zerarGame() {
//   var zerarGame = document.getElementById("zero-button");
//         zerarGame.addEventListener("click", function(){
//           updateText();
//         })
// }

function vitoriaCheck() {
  const vitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let vitoria of vitorias) {
    if(vitoria.every((index) => tabuleiro[index] === tabuleiro[vitoria[0]] && vitoria[index] !== null)) {

    }
  }
}
