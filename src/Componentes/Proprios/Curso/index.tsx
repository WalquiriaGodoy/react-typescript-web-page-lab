import React from 'react';
import { CursoContainter } from './styles';

interface CursoProps {
  nome: string;
  nivel: string;
  preco: string;
}

export const Curso: React.FC<CursoProps> = ({ nome, nivel, preco }) => {
  return (
    <CursoContainter>
      <div>{nome}</div>
      <div>{nome}</div>
      <div>{nivel}</div>
    </CursoContainter>
  );
};
