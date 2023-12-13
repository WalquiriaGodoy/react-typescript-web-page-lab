import React from 'react';
import { ListaDeCursosContainer } from './styles';
import { Curso } from '../Proprios/Curso';

export const CoursesList = () => {
  return (
    <ListaDeCursosContainer>
      <Curso nome='Lab Roots' nivel='Básico I' preco='NO PIX: R$390,00' />
      <Curso nome='Lab Roots' nivel='Básico I' preco='NO PIX: R$390,00' />
      <Curso nome='Lab Roots' nivel='Básico I' preco='NO PIX: R$390,00' />
      <Curso nome='Lab Roots' nivel='Básico I' preco='NO PIX: R$390,00' />
    </ListaDeCursosContainer>
  );
};
