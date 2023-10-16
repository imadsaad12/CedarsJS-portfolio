import React, { useState, useEffect } from "react";
import {
  PageLayout,
  PageContent,
  EmailContainer,
  Email,
  Line,
  SocialMediaContainer,
  SubContainer,
  IconContainer,
  ComponentWrapper,
} from "./styles";
import Navbar from "./navbar";
import Logo from "../static/logo";
import { CiFacebook } from "react-icons/ci";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

export default function HOC(WrappedComponent: React.FC) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <PageLayout>
      {!isLoading ? (
        <>
          <Navbar />
          <PageContent>
            <ComponentWrapper>
              <WrappedComponent />
            </ComponentWrapper>
            <EmailContainer>
              <Email>cedarsjs@gmail.com</Email>
              <Line />
            </EmailContainer>
            <SocialMediaContainer>
              <SubContainer>
                <IconContainer style={{ top: 20 }}>
                  <CiFacebook size={30} />
                </IconContainer>
                <IconContainer style={{ top: 75 }}>
                  <BiLogoInstagram size={30} />
                </IconContainer>
                <IconContainer style={{ top: 130 }}>
                  <FaLinkedin size={25} />
                </IconContainer>
              </SubContainer>
              <Line />
            </SocialMediaContainer>
          </PageContent>
        </>
      ) : (
        <Logo/>
      )}
    </PageLayout>
  );
}
