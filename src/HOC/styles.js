import styled, { keyframes } from "styled-components";
import stars from "../static/space/stars.png";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

`;
export const StarsLayout = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-image: url(${stars});
  background-repeat: repeat;
  background-size: 500px 300px; 
    mix-blend-mode: color-dodge;
  top:0;
  opacity: 0.6;
`;

export const PageContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  overflow: hidden;
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
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  padding-bottom: 10px;
  width: 70%;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};

`;

export const ComponentWrapper = styled.div`
  width: 65%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
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
  color: ${({ theme: { colors } }) => colors.white};
`;
