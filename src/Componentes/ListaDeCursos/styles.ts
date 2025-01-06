import styled, { css } from 'styled-components';
import { DeviceType } from '../../types/deviceTypes';

const responsivePadding = ($deviceType: DeviceType) => {
  if ($deviceType === 'desktop') {
    return '2rem 12rem';
  }
  if ($deviceType === 'tablet') {
    return '2rem 4rem';
  }
  if ($deviceType === 'mobile') {
    return '1rem 0.2rem';
  }
  return 'unset';
};

export const ListaDeCursosContainer = styled.div<{ $deviceType: DeviceType }>`
  ${({ $deviceType }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fefefe;
    padding: ${responsivePadding($deviceType)};
    gap: 4rem;

    p {
      text-align: justify;
      margin-bottom: 1rem;
      margin-top: 1rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }
  `}
`;
