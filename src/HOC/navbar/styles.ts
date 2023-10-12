import styled from "styled-components";

interface BarProps {
  isOpen: boolean;
}
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.35);
  background-color: ${(props) => props.theme.colors.primaryBackground};
`;

export const Logo = styled.img`
  width: 9%;
  height: 90%;
  margin-left: 2em;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    width: 22%;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 30%;
    margin-left: 1em;
  }
`;

export const MenuContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
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
  z-index: 1;
  position: relative;
  margin-right: 10%;
  gap: 3px;
`;

export const Bar = styled.div<BarProps>`
  height: 2px;
  transition: transform 0.3s, opacity 0.3s;
  background-color: ${(props) => props.theme.colors.primaryFontColor};
  &:nth-child(1) {
    ${({ isOpen }) =>
      isOpen
        ? `
      opacity: 0;
    `
        : `width:35px;`}
  }
  &:nth-child(2) {
    ${({ isOpen }) =>
      isOpen
        ? `
      width: 30px;
      transform: translateY(0.4px) rotate(45deg);
      opacity: 1;
    `
        : `width: 25px;`}
  }

  &:nth-child(3) {
    ${({ isOpen }: any) =>
      isOpen
        ? `
      width: 30px;
      transform: translateY(-9px) rotate(-45deg) translateX(2px);
      opacity: 1;
    `
        : `width: 15px;`}
  }
`;
