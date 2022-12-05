import React from 'react';
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
              <LinkButton texto='Cadastro' path='/cadastro' />
            </li>
            <li>
              <LinkButton texto='Cursos' path='/cursos' />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Cabecalho;
