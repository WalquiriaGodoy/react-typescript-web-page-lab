import React from 'react';
import './rodape.scss';
import logolab2 from '../../assets/img/logolab2.png';

class Rodape extends React.Component {
  render() {
    return (
      <footer>
        <img
          className='rodape-logo'
          src={logolab2}
          alt='Imagem do Cientista Einstein com um chapéu de Forró'
        />
        <p className='copyright'>
          &copy; Copyright Laboratório de Forró - 2021
        </p>
      </footer>
    );
  }
}
export default Rodape;
