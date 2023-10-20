import React, { useState, useEffect } from "react";
import { PageLayout, PageContent, ComponentWrapper } from "./styles";
import Navbar from "./navbar";
import Logo from "../static/logo";
import EmailAndSocialMedia from "./emaiAndSocialMedia";
import useBreakpoint from "../utils/useMediaQuery";
import theme from "../styles/theme";

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  bottom: "10px",
                  border: "1px solid white",
                }}
              ></div>
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
