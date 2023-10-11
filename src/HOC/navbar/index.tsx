import React, { useState } from "react";
import logoImage from "../../static/logo.png";
import {
  Bar,
  BurgerMenuButton,
  Logo,
  MenuContainer,
  NavbarContainer,
} from "./styles";
import MenuItem from "./menuItem";
import useBreakpoint from "../../utils/useMediaQuery";
import theme from "../../styles/theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuList = [
    { name: "Home", number: "I." },
    { name: "About us", number: "II." },
    { name: "Work", number: "III." },
    { name: "Contact", number: "VI." },
  ];
  return (
    <NavbarContainer>
      <Logo src={logoImage} />
      {isSmallScreen ? (
        <BurgerMenuButton onClick={toggleMenu}>
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
        </BurgerMenuButton>
      ) : (
        <MenuContainer>
          {menuList.map(({ name, number }) => (
            <MenuItem name={name} number={number} />
          ))}
        </MenuContainer>
      )}
    </NavbarContainer>
  );
}
