import styled, { keyframes } from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 10vh;
  background-color: red;
  width: 100%;
`;
export const PageContent = styled.div`
flex:1;
background-color:green;
width: 100%;
padding-top: 10vh;
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
  animation: ${fadeInOut} 2s ease-in-out;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    width: 200px;
    height: 100px;
  }
`;
