import styled, { keyframes } from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
`;

type PageContentProps = {
  isBlurred: boolean;
};
export const PageContent = styled.div<PageContentProps>`
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
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Logo = styled.img`
  opacity: 0;
  width: 400px;
  height: 200px;
  animation: ${fadeInOut} 2s ease-in-out;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    width: 200px;
    height: 100px;
  }
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
