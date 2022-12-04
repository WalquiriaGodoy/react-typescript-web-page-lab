import React from 'react';
import { Link } from 'react-router-dom';
import { LinkButton } from '../MaterialUI/button';
import logolab2 from './../../assets/img/logolab2.png';
import './cabecalho.scss';

class Cabecalho extends React.Component {
  render() {
    return (
      <header>
        <div className='caixa-transparente'>
          <img className='cabecalho-logo' src={logolab2} />
          <ul className='lista-navegacao'>
            <li>
              <LinkButton texto='HOME' path='/' />
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cadastro'>
                Cadastro
              </Link>
            </li>
            <li>
              <Link className='item-lista-navegacao' to='/cursos'>
                Cursos
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Cabecalho;
