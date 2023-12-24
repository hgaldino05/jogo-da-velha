// Tabuleiro.jsx - componente "tabuleiro"
import { useState, useEffect } from "react";
import "../index.css";

// a linha de baixo foi só para tirar erro, o proprio vscode pediu
// eslint-disable-next-line react/prop-types
function Tabuleiro({ setPontuacao1, setPontuacao2, reset, setVencedor, jogador1, jogador2 }) {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState("X");
  const [gameOver, setGameOver] = useState(false);

// vai reiniciar as coisas (tabuleiro, "vez" e o "gameOver")
  useEffect(() => {
    setTabuleiro(Array(9).fill(null)); // Reinicia o tabuleiro quando o estado de reset muda
    setTurno("X"); // Reinicia o turno para "X" quando o jogo é reiniciado
    setGameOver(false); // Reinicia o estado de gameOver quando o jogo é reiniciado
  }, [reset]);

  const jogada = (i) => {
    if (!tabuleiro[i] && !gameOver) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[i] = turno;
      setTabuleiro(novoTabuleiro);
      setTurno(turno === "X" ? "O" : "X");

// quem ganhou
      const vencedor = verificaVitoria(novoTabuleiro);
      if (vencedor) {
        setGameOver(true);
        if (vencedor === "X") {
          setPontuacao1(pontuacao1 => pontuacao1 + 1);
          setVencedor(jogador1);
        } else {
          setPontuacao2(pontuacao2 => pontuacao2 + 1);
          setVencedor(jogador2);
        }
      } else if (!novoTabuleiro.includes(null)) {
// deu velha :p
        setGameOver(true);
        setVencedor("A velha ");
      }
    }
  };

// verifica se algum mané ganhou
  const verificaVitoria = (tabuleiro) => {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
        return tabuleiro[a];
      }
    }

    return null;
  };

  return (
    <div id="jogo" className="jogo">
      {tabuleiro.map((value, i) => (
        <button key={i} onClick={() => jogada(i)} className="celulas">
          {value}
        </button>
      ))}
    </div>
  );
}
export default Tabuleiro;
