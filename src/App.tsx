import React from 'react';
import './styles/Fonts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Cursos from './paginas/Cursos';
import 'normalize.css';
import Matricula from './paginas/Matricula';
import Cadastro from './paginas/Cadastro';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/cursos' element={<Cursos />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
