import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Cadastro from './paginas/Cadastro';
import Cursos from './paginas/Cursos';
import 'normalize.css';
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
