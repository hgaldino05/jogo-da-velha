// routes.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio.jsx';
import Jogo from './pages/jogo.jsx';

// faz a navegacao entre as pagina 
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
