import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css';
import contextJogador from '../contextJogador';

function Inicio() {
  const navigate = useNavigate();
  const { jogador1, setJogador1, jogador2, setJogador2 } = useContext(contextJogador);

// muda jogador
  const mudaJ1 = (event) => {
    setJogador1(event.target.value);
  };

  const mudaJ2 = (event) => {
    setJogador2(event.target.value);
  };

// verifica se tem nome e avança
  const clickNext = () => {
    if (!jogador1 || !jogador2) {
      alert('Ambos os jogadores devem conter nomes');
    } else {
      navigate('/jogo');
    }
  };

  return (
    <>
    
      <h1>
        JOGO DA VELHA - MACHADÂMBAR
      </h1>
      
      <p>
        Informe o nome dos jogadores (Jogador 1 começa jogando):
      </p>
      
      <body className="inicio">
        <div id="players" className="players">
          <p>(X): 
            <span id="jogador1">{jogador1}</span>
          </p>
          
          <input
            id="inputJ1"
            className="input-style"
            onChange={mudaJ1}
            value={jogador1}
            maxLength="11"
          />
          
          <p>
            (O): <span id="jogador2">{jogador2}</span>
          </p>

          <input
            id="inputJ2"
            className="input-style"
            onChange={mudaJ2}
            value={jogador2}
            maxLength="11"
          />
            <button id="next-button" className="button" onClick={clickNext}>
              Próximo
            </button>
        </div>
      </body>
     
      <h3>
        OBS: O Jogador J1 (X)  sempre começa jogando.
      </h3>

    </>
  )
}

export default Inicio;
