import React, { useState, useEffect } from "react";
import { PageLayout, PageContent, ComponentWrapper, Text } from "./styles";
import Navbar from "./navbar";
import Logo from "../static/logo";
import EmailAndSocialMedia from "./emaiAndSocialMedia";
import useBreakpoint from "../utils/useMediaQuery";
import theme from "../styles/theme";
import { CiFacebook } from "react-icons/ci";
import { IconContainer } from "./emaiAndSocialMedia/styles";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function HOC(WrappedComponent: React.FC) {
  const [isLoading, setIsLoading] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <PageLayout>
      {!isLoading ? (
        <>
          <Navbar setIsBlurred={setIsBlurred} />
          <PageContent isBlurred={isBlurred}>
            <ComponentWrapper>
              <WrappedComponent />
            </ComponentWrapper>
            {isSmallScreen ? (
              <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  bottom: "10px",
                  alignItems:"center",
                  justifyContent:"space-between",
                  height:"50px",
                  width:"40%"
                }}
              >
                <CiFacebook size={25} style={{color:"white"}}/>
                <BiLogoInstagram size={25} style={{color:"white"}}/>
                <FaLinkedin size={25} style={{color:"white"}}/>
              </div>
              <Text>Designed & built by CedarsJS</Text>
              </>

            ) : (
              <EmailAndSocialMedia />
            )}
          </PageContent>
        </>
      ) : (
        <Logo />
      )}
    </PageLayout>
  );
}
