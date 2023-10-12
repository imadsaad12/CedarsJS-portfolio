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

export const EmailContainer = styled.div`
  position: fixed;
  height: 20px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primaryFontColor};
  right: -130px;
  bottom: 19%;
  transform: rotate(90deg);
  gap: 15px;

  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    right: -150px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    display: none;
  }
`;

export const Email = styled.p`
  letter-spacing: 3px;
  width: 50%;
  &:hover {
    color: ${(props) => props.theme.colors.secondaryFontColor};
    cursor: pointer;
    margin-left: -10px;
    transition: all 0.1s ease-in-out;
  }
`;
export const Line = styled.div`
  width: 150px;
  border: 1px solid #a8b2d1;
`;

export const SocialMediaContainer = styled.div`
  position: fixed;
  height: 20px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 19%;
  transform: rotate(90deg);
  gap: 15px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  left: -130px;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    left: -150px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  height: 150px;
  width: 50%;
  position: relative;
  padding: 20px;
`;

export const ComponentWrapper = styled.div`
  width: 65%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex: 1;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    width: 80%;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  &:hover {
    color: ${(props) => props.theme.colors.secondaryFontColor};
    cursor: pointer;
    margin-top: -10px;
    transition: all 0.2s ease-in-out;
  }
`;
