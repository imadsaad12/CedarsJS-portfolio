import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const fadeInOut = keyframes`
   0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Logo = styled.img`
  opacity: 0;
  width: 400px;
  height: 200px;
  animation: ${fadeInOut} 3s ease-in-out;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    width: 200px;
    height: 100px;
  }
`;
