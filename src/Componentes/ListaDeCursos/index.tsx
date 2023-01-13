import React from 'react';
import { ListaDeCursosContainer } from './styles';
import { Curso } from './../../Componentes/Proprios/Curso';

export const ListaDeCursos = () => {
  return (
    <ListaDeCursosContainer>
      <Curso nome='Lab Roots' nivel='Básico I' preco='NO PIX: R$390,00' />
    </ListaDeCursosContainer>
  );
};
