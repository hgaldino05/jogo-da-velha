// jogo.jsx - classe do "jogo"
import { useContext, useState } from "react";
import "../index.css";
import contextJogador from "../contextJogador";
import Tabuleiro from "../components/tabuleiro.jsx";

function Jogo() {
  const { jogador1, jogador2 } = useContext(contextJogador);
  const [pontuacao1, setPontuacao1] = useState(0);
  const [pontuacao2, setPontuacao2] = useState(0);
  const [reset, setReset] = useState(false);
  const [vencedor, setVencedor] = useState("");

  // limpa o tabuleiro
  const resetaJogo = () => {
    setReset(!reset);
    setVencedor("");
  };

  // zera o ponto dos 2 jogador
  const zeraPontos = () => {
    setPontuacao1(0);
    setPontuacao2(0);
  };

  return (
    <>
      <h1>JOGO DA VELHA - MACHADÂMBAR</h1>

      <div className="centro">
        <div id="infos" className="infos">
          <p>
            (J1) X - <span id="spanJ1"> {jogador1}</span>: {pontuacao1}
          </p>
          <p>VS.</p>
          <p>
            (J2) O - <span id="spanJ2"> {jogador2}</span>: {pontuacao2}
          </p>
        </div>

        <Tabuleiro setPontuacao1={setPontuacao1} 
        setPontuacao2={setPontuacao2} 
        reset={reset} 
        setVencedor={setVencedor} 
        jogador1={jogador1} 
        jogador2={jogador2} />

        <div id="actions" className="actions">
          <p id="texto">{vencedor ? `${vencedor} venceu!!!!` : "Deseja reiniciar o jogo atual ou zerar o placar?"}</p>

          <button id="reset-button" className="button" onClick={resetaJogo}>
            Reiniciar jogo atual
          </button>

          <button id="zero-button" className="button" onClick={zeraPontos}>
            Zerar o placar
          </button>
        </div>

      </div>
    </>
  );
}

export default Jogo;
