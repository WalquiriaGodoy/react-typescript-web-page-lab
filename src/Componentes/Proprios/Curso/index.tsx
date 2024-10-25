import React from 'react';
import * as S from './styles';

interface CursoProps {
  name: string;
  children: React.ReactNode;
  description: string;
  dayOfWeek?: string;
  firstDayOfClass?: string;
  avaliable?: boolean;
  startTime?: string;
  endTime?: string;
  reverse: boolean;
}

export const Curso: React.FC<CursoProps> = ({
  name,
  children,
  description,
  dayOfWeek,
  firstDayOfClass,
  avaliable = false,
  startTime,
  endTime,
  reverse,
}) => {
  const paragrafos = description.split('\n');

  return (
    <S.CursoContainter key={name} reverse={reverse}>
      <S.ImageContainer>{children}</S.ImageContainer>
      <S.DescriptionStyle>
        <h1>{name}</h1>
        {paragrafos.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
        <S.OfferInformation>
          <h2>Oferecimento no 3º Trimestre de 2024: </h2>
          <p>
            {avaliable
              ? `${dayOfWeek}: ${startTime} - ${endTime}`
              : 'Não Disponível'}
          </p>
          {avaliable && <p>Primeiro dia da aula: {firstDayOfClass}</p>}
        </S.OfferInformation>
      </S.DescriptionStyle>
    </S.CursoContainter>
  );
};
