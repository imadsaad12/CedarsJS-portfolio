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
  @media (max-width: 2000px) {
    right: 18%;
  }
  @media (max-width: 1800px) {
    right: 15%;
  }
  @media (max-width: 1600px) {
    right: 10%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.xl}px) {
    right: 10%;
  }
  @media (max-width: 1400px) {
    right: 10%;
  }
  @media (max-width: 1300px) {
    right: 7%;
  }
  @media (max-width: 1100px) {
    right: 5%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    right: 10%;
  }
  @media (max-width: 800px) {
    right: 10%;
  }
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
