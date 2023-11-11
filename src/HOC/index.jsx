import React, { useState, useEffect } from "react";
import {
  PageLayout,
  PageContent,
  ComponentWrapper,
  Text,
  IconsContainer,
  LogoContainer,
  StarsLayout,
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
      // const isSideBarOpen = document.getElementById("sideBar");

      if (prevScrollPos > currentScrollPos) {
        setIsFadeIn(true);
      } else if (!isSmallScreen) {
        setIsFadeIn(false);
      }

      if (currentScrollPos === 0) {
        document.getElementById("navbar").style.boxShadow = "none";
      } else if (!isSmallScreen) {
        document.getElementById("navbar").style.boxShadow =
          "0px 10px 30px -10px rgba(0, 0, 0, 0.35)";
      }

      prevScrollPos = currentScrollPos;
    };
    setTimeout(() => setIsLoading(false), 3000);
  });

  return (
    <PageLayout isLoading={isLoading}>
      <StarsLayout></StarsLayout>
      <Navbar setIsBlurred={setIsBlurred} isFadeIn={isFadeIn} />
      <PageContent isLoading={isLoading} isBlurred={isBlurred}>
        <WrappedComponent />
        {isSmallScreen ? (
          <>
            <IconsContainer>
              <CiFacebook size={25} />
              <BiLogoInstagram size={25} />
              <FaLinkedin size={25} />
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
