import React, { useState, useEffect } from "react";
import { PageLayout, Logo,PageContent } from "./styles";
import Navbar from "./Components/Navbar";
import logoImage from "../static/logo.png";

export default function HOC(WrappedComponent) {
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
            <WrappedComponent />
          </PageContent>
        </>
      ) : (
        <Logo src={logoImage} />
      )}
    </PageLayout>
  );
}
