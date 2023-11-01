import React, { useState } from "react";
import Logo from "../../static/logo";
import {
  Bar,
  BurgerMenuButton,
  ItemsWrapper,
  MenuContainer,
  NavbarContainer,
  SideBar,
} from "./styles";
import MenuItem from "./menuItem";
import useBreakpoint from "../../utils/useMediaQuery";
import theme from "../../styles/theme";
import Stars from "../../styles/reusable/Stars";

export default function Navbar({ setIsBlurred, isFadeIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBlurred(!isOpen);
  };

  const menuList = [
    { name: "Home", number: "01.", link: "home" },
    { name: "About us", number: "02.", link: "about-us" },
    { name: "Work", number: "03.", link: "work" },
    { name: "Contact", number: "04.", link: "contact" },
  ];

  return (
    <NavbarContainer id="navbar" isFadeIn={isFadeIn} isOpen={isOpen}>
      <Logo />
      <Stars left={"0"} width={"50%"} />
      <Stars right={"0"} width={"50%"} />

      {isSmallScreen ? (
        <BurgerMenuButton onClick={toggleMenu}>
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
          <Bar isOpen={isOpen} />
        </BurgerMenuButton>
      ) : (
        <MenuContainer>
          {menuList.map(({ name, number, link }) => (
            <MenuItem name={name} number={number} link={link} />
          ))}
        </MenuContainer>
      )}
      {isOpen && (
        <SideBar id="sideBar" isOpen={isOpen}>
          <ItemsWrapper>
            {menuList.map(
              ({ name, number, link }) =>
                isOpen && (
                  <MenuItem
                    name={name}
                    number={number}
                    link={link}
                    isSideBar={true}
                    onClick={toggleMenu}
                  />
                )
            )}
          </ItemsWrapper>
        </SideBar>
      )}
    </NavbarContainer>
  );
}
