import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Cursos from './paginas/Cursos';
import 'normalize.css';
import Matricula from './paginas/Matricula';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/matricula' element={<Matricula />} />
          <Route path='/cursos' element={<Cursos />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
