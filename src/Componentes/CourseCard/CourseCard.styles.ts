import styled, { css } from "styled-components";

type TilteProps = {
  $textAlign?: string;
  $top?: string;
  $rigth?: string;
};

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  border-radius: 20px;

  cursor: pointer;
  & :hover {
    transform: scale(1.005);
  }

  img {
    border-radius: 20px;
  }
`;

export const Image = styled.div`
  width: 400px;
  border-radius: 10px;
`;

export const Title = styled.div<TilteProps>`
  ${({ $textAlign, $top, $rigth }) => css`
    font-family: "IrishGrover";
    position: absolute;
    font-size: 40px;
    font-weight: 600;
    text-align: ${$textAlign};
    right: ${$rigth};
    top: ${$top};
    color: white;
  `}
`;
