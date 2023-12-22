//APAGAR ANTES DE DAR COMMIT


// Inicializa o tabuleiro com um array de 9 elementos, todos nulos
let board = Array(9).fill(null);

// Define o jogador atual como "X"
let currentPlayer = "X";

// Define uma variável para verificar se o jogo terminou
let gameOver = false;

// Função que é chamada quando uma célula é clicada
function cellClicked(e) {
  // Se o jogo já terminou, não faz nada
  if (gameOver) return;

  // Obtém o índice da célula clicada
  let index = Number(e.target.dataset.index);

  // Se a célula já foi preenchida, não faz nada
  if (board[index] !== null) return;

  // Preenche a célula no tabuleiro com o jogador atual
  board[index] = currentPlayer;

  // Atualiza o texto da célula clicada com o jogador atual
  e.target.textContent = currentPlayer;

  // Verifica se o jogo terminou
  checkGameOver();

  // Alterna o jogador atual
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Função para verificar se o jogo terminou
function checkGameOver() {
  // Define todas as linhas possíveis para ganhar o jogo
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Verifica cada linha
  for (let line of lines) {
    // Se todas as células em uma linha são iguais e não nulas, o jogo terminou
    if (
      board[line[0]] !== null &&
      board[line[0]] === board[line[1]] &&
      board[line[0]] === board[line[2]]
    ) {
      // Atualiza a mensagem para mostrar o vencedor
      document.getElementById("message").textContent =
        "Vitória do " + currentPlayer;

      // Define o jogo como terminado
      gameOver = true;

      // Sai da função
      return;
    }
  }

  // Se todas as células foram preenchidas e ninguém ganhou, o jogo terminou
  if (!board.includes(null)) {
    // Atualiza a mensagem para mostrar que o jogo terminou em empate
    document.getElementById("message").textContent = "Deu velha!";

    // Define o jogo como terminado
    gameOver = true;
  }
}

// Função para reiniciar o tabuleiro
function resetBoard() {
  // Reinicia o tabuleiro
  board = Array(9).fill(null);

  // Define o jogador inicial como "X"
  currentPlayer = "X";

  // Define o jogo como não terminado
  gameOver = false;

  // Limpa a mensagem
  document.getElementById("message").textContent = "";

  // Limpa todas as células
  document
    .querySelectorAll(".cell")
    .forEach((cell) => (cell.textContent = ""));
}

// Função que é chamada quando a página é carregada
window.onload = function () {
  // Cria 9 células
  for (let i = 0; i < 9; i++) {
    // Cria uma nova célula
    let cell = document.createElement("div");

    // Adiciona a classe "cell" à célula
    cell.classList.add("cell");

    // Define o índice da célula
    cell.dataset.index = i;

    // Adiciona um ouvinte de evento de clique à célula
    cell.addEventListener("click", cellClicked);

    // Adiciona a célula ao tabuleiro
    document.getElementById("board").appendChild(cell);
  }
};
