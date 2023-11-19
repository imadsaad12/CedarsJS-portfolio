import styled, { keyframes } from "styled-components";
export const TeamMembersContainer = styled.div`
  width: 99%;
  height: 99%;
  position: relative;
  overflow: hidden;
  border-radius: 50px;
`;
const fadeIn = keyframes`
0%{
    width: 120px;
    height: 120px;

}
50%{
    width: 50%;
    height: 50%;
}
100%{
    width: 100%;
    height: 100%;
}
`;
export const TeamMemberContainer = styled.div`
  width: ${({ isClicked }) => (isClicked ? "100%" : "100px")};
  height: ${({ isClicked }) => (isClicked ? "100%" : "100px")};

  margin: ${({ isClicked }) => (isClicked ? "0" : "25px")};
  position: absolute;
  border-radius: ${({ isClicked }) => (isClicked ? "0" : "50%")};
  background-color: ${({ theme: { colors } }) => colors.white};
  top: ${({ top, isClicked }) => (isClicked ? "0" : top)};
  left: ${({ left, isClicked }) => (isClicked ? "0" : left)};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.5s ease-in-out;
  z-index: ${({ isClicked, zIndex }) => (isClicked ? "8" : zIndex)};
  animation: ${({ condition }) =>
    condition ? `${fadeIn} 1s ease-in-out` : "none"};
  cursor: pointer;
  filter: drop-shadow(1px 1px 3px black);

  @media (max-width: 2000px) {
    left: ${({ left, isClicked }) =>
      isClicked ? "0" : `calc(${left} + 28px)`};
  }
  @media (max-width: 1600px) {
    left: ${({ left, isClicked }) =>
      isClicked ? "0" : `calc(${left} + 10px)`};
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.xl}px) {
    left: ${({ left, isClicked }) => (isClicked ? "0" : `calc(${left} + 8px)`)};
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    left: ${({ left, isClicked }) => (isClicked ? "0" : `calc(${left} + 0px)`)};
  }
`;
export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 20px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 10%;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;
export const Time = styled.p`
  color: white;
  font-size: 10px;
  position: absolute;
  top: 12px;
  left: 24px;
  z-index: 20;
`;
export const WifiStyle = {
  color: "white",
  position: "absolute",
  zIndex: "10",
  right: "55",
  top: "21",
};
export const NetWorkStyle = {
  color: "white",
  position: "absolute",
  zIndex: "10",
  right: "43",
  top: "23",
};
export const BatteryStyle = {
  color: "white",
  position: "absolute",
  zIndex: "10",
  right: "22",
  top: "21",
};
const spin = keyframes`
   0% { 
    transform: rotate(0deg); 
  }
   100%{ 
    transform: rotate(360deg); 
  }
`;

export const OuterSpinner = styled.div`
  border: 3px solid transparent;
  display: ${({ isClicked }) => isClicked && "none"};
  border-radius: 50%;
  border: 3px solid #3498db;
  border-top: 3px solid #fff;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear reverse infinite;
  position: absolute;
  top: -3px;
  left: -3px;
`;
