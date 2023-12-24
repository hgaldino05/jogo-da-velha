// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio.jsx';
import Jogo from './pages/jogo.jsx';
import contextJogador from './contextJogador';

function App() {
  const [jogador1, setJogador1] = useState('Jogador J1');
  const [jogador2, setJogador2] = useState('Jogador J2');

  return (
    <contextJogador.Provider value={{ jogador1, setJogador1, jogador2, setJogador2 }}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/jogo" element={<Jogo />} />
        </Routes>
      </Router>
    </contextJogador.Provider>
  );
}

export default App;
