import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const ItenContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelContainer = styled.label`
  margin-bottom: 5px;
`;

export const InputContainer = styled.input`
  border-radius: 5px;
  height: 2rem;
  padding: 0.2rem 0.4rem;
`;

export const InputContainerMask = styled(InputMask)`
  border-radius: 5px;
  height: 2rem;
  padding: 0.2rem 0.4rem;
`;

export const MessageContainer = styled.span`
  color: red;
  font-size: 1rem;
  margin-top: 0.2rem;
`;
