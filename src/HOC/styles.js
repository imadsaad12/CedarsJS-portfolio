import styled, { keyframes } from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

export const PageContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  filter: ${(props) => props.isBlurred && "blur(10px)"};
`;

const fadeInOut = keyframes`
   0% {
    opacity: 1;
  }
   40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

export const LogoContainer = styled.div`
  opacity: 1;
  background-color: ${(props) => props.theme.colors.navBar};
  position: fixed;
  z-index: 99;
  height: 100vh;
  width: 100%;
  display: ${(props) => (props.isLoading ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  animation: ${fadeInOut} 3s ease-in-out;
  top: 0;
  left: 0;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  padding-bottom: 10px;
  width: 70%;
  text-align: center;
`;

export const ComponentWrapper = styled.div`
  width: 65%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex: 1;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    width: 90%;
  }
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 10px;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 40%;
`;
