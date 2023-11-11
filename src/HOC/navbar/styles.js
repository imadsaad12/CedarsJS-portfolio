import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
 height: 0;
}
50% {
 height: 5vh;
}
100% {
 height: 10vh;
}
`;

const fadeOut = keyframes`
0% {
 height: 10vh;
}
50% {
 height: 5vh;
}
100% {
 height: 0vh;
 margin-top: -5vh;
}
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  justify-content: ${(props)=>props.Screen?"flex-end":"space-between"};
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  z-index: 20;
  overflow: hidden;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-name: ${(props) => (props.isFadeIn ? fadeIn : fadeOut)};
  z-index: 900;
`;

export const Logo = styled.img`
  width: 9%;
  height: 90%;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    width: 22%;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 30%;
  }
`;

export const MenuContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 17px;
  margin-right: 2em;
  @media (max-width: ${(props) => props.theme.breakingPoints.xl}px) {
    width: 44%;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 60%;
  }
`;

export const BurgerMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 40px;
  height: 25px;
  padding: 0;
  margin: 0;
  z-index: 9999;
  position: relative;
  margin-right: 10%;
  gap: 3px;
`;

export const Bar = styled.div`
  height: 2px;
  transition: transform 0.3s, opacity 0.3s;
  background-color: ${({ theme: { colors } }) => colors.blue};
  &:nth-child(1) {
    ${({ isOpen }) =>
      isOpen
        ? `
      opacity: 0;
    
    `
        : `width:35px;`}
  }
  &:nth-child(2) {
    ${({ isOpen, theme }) =>
      isOpen
        ? `
      width: 30px;
      transform: translateY(0.4px) rotate(45deg);

      opacity: 1;
    `
        : `width: 25px;`}
  }

  &:nth-child(3) {
    ${({ isOpen }) =>
      isOpen
        ? `
      width: 30px;
      transform: translateY(-9px) rotate(-45deg) translateX(2px);
      opacity: 1;
    `
        : `width: 15px;`}
  }
`;

export const displaySideBar = keyframes`
  0% {
    width: 0
  }
  50% {
    width: 30%

  }
  100% {
    width: 70%;

  }
`;
const closeSideBar = keyframes`
  0% {
    width: 70%;
  }
  50% {
    width: 20%;
  }
  100% {
    width: 0;
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: 80%;
  position: fixed;
  right: ${(props)=>props.isOpen?0:"-80%"};
  top: 0;
  height: 100vh;
  z-index: 999;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  transition: all 0.5s ease-in-out;
  /* animation-name: ${(props) => (props.isOpen ? displaySideBar : closeSideBar)}; */
  gap: 40px;
  overflow: hidden;
`;

export const ItemsWrapper = styled.div`
  width: 50%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start;
  position: absolute;
  z-index: 6;
  right: 17%;
  top:10%;
`;

export const LogoImage = styled.img`
/* width: 60px; */
height: 30%;
margin-left: 30px;
  /* width: 50%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  align-items: flex-start; */
`;

export const CurvedSidebar = styled.svg`
height: 100%;
position: absolute;


`;
export const Curve = styled.path`
position: absolute;
height: 100%;
fill: ${({ theme: { colors } }) => colors.background};
z-index: 5;
`;
export const Curve2 = styled.path`
position: absolute;
height: 100%;
fill: ${({ theme: { colors } }) => colors.blue};
z-index: 4;
`;
