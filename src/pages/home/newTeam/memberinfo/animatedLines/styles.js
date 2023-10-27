import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  position: absolute;
  right: 10%;
  top: -5%;
  z-index: 100;
`;
const growUp = keyframes`
0%{
    transform:scaleY(0) ;
    transform-origin: bottom;
}
100%{
    transform:scaleY(1) ;
    transform-origin: bottom;
}
`;
export const Line = styled.div`
  width: 5px;
  height: ${({ height }) => height};
  border-radius: 10px;
  background: ${({ theme: { colors } }) =>
    `linear-gradient( ${colors.blue}, ${colors.green})`};
  animation: ${growUp} 0.5s linear;
`;
