import React from "react";
import { Container } from "./styles";
import useBreakpoint from "../../../utils/useMediaQuery";
import theme from "../../../styles/theme";
import IntroDesktop from "./desktopversion";
import IntroMobile from "./mobileversion";
export default function Intro() {
  const isSmallSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  return (
    <Container id="home">
      {isSmallSmallScreen ? (
        <IntroMobile />
      ) : (
        <IntroDesktop />
      )}
    </Container>
  );
}
