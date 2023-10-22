import React, { useState } from "react";
import Logo from "../../static/logo";
import {
  Bar,
  BurgerMenuButton,
  MenuContainer,
  NavbarContainer,
  SideBar,
} from "./styles";
import MenuItem from "./menuItem";
import useBreakpoint from "../../utils/useMediaQuery";
import theme from "../../styles/theme";

export default function Navbar({ setIsBlurred }: { setIsBlurred: Function }) {
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBlurred(!isOpen);
  };

  const menuList = [
    { name: "Home", number: "I .", link: "home" },
    { name: "About us", number: "II .", link: "about-us" },
    { name: "Work", number: "III .", link: "work" },
    { name: "Contact", number: "VI .", link: "contact" },
  ];

  return (
    <NavbarContainer>
      <Logo />
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
      {/* <SideBar isOpen={isOpen}>
        {menuList.map(
          ({ name, number, link }) =>
            isOpen && (
              <MenuItem
                name={name}
                number={number}
                link={link}
                isSideBar={true}
                onClick={() => toggleMenu()}
              />
            )
        )}
      </SideBar> */}
    </NavbarContainer>
  );
}
