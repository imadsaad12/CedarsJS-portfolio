import React, { useState } from "react";
import Logo from "../../static/logo";
import {
  Bar,
  BurgerMenuButton,
  ItemsWrapper,
  MenuContainer,
  NavbarContainer,
  SideBar,
  LogoImage,
  Curve,
  CurvedSidebar,
  Curve2,
} from "./styles";
import cedars from "../../static/cedars.png";
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
    <NavbarContainer
      id="navbar"
      isFadeIn={isFadeIn}
      isOpen={isOpen}
      Screen={isSmallScreen}
    >
      {/* <Logo /> */}
      {!isSmallScreen && <LogoImage src={cedars} />}
      {!isSmallScreen && <Stars left={"0"} width={"50%"} />}
      {!isSmallScreen && <Stars right={"0"} width={"50%"} />}
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
      <SideBar id="sideBar" isOpen={isOpen}>
        <CurvedSidebar
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 956 2560"
        >
          <Curve2 d="m956 0v2560h-728c0 0 234-853.5-110-1586-200-520.5-8-974-8-974z" />
          <Curve d="m956 0v2560h-720c0 0 234-853.5-110-1586-200-520.5-8-974-8-974z" />
        </CurvedSidebar>
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
    </NavbarContainer>
  );
}
