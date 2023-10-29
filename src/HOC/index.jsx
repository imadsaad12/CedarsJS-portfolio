import React, { useState, useEffect } from "react";
import {
  PageLayout,
  PageContent,
  ComponentWrapper,
  Text,
  IconsContainer,
  LogoContainer,
} from "./styles";
import Navbar from "./navbar";
import Logo from "../static/logo";
import EmailAndSocialMedia from "./emaiAndSocialMedia";
import useBreakpoint from "../utils/useMediaQuery";
import theme from "../styles/theme";
import { CiFacebook } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function HOC(WrappedComponent) {
  const [isLoading, setIsLoading] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(true);
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsFadeIn(true);
      } else {
        setIsFadeIn(true);
      }

      prevScrollPos = currentScrollPos;
    };
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <PageLayout isLoading={isLoading}>
      {/* <LogoContainer isLoading={isLoading}>
        <Logo color="#02203c" />
      </LogoContainer> */}
      <Navbar setIsBlurred={setIsBlurred} isFadeIn={isFadeIn} />
      <PageContent isLoading={isLoading} isBlurred={isBlurred}>
        <WrappedComponent />
        {isSmallScreen ? (
          <>
            <IconsContainer>
              <CiFacebook size={25} style={{ color: "#02203c" }} />
              <BiLogoInstagram size={25} style={{ color: "#02203c" }} />
              <FaLinkedin size={25} style={{ color: "#02203c" }} />
            </IconsContainer>
            <Text>Designed & built by CedarsJS</Text>
          </>
        ) : (
          <EmailAndSocialMedia />
        )}
      </PageContent>
    </PageLayout>
  );
}
