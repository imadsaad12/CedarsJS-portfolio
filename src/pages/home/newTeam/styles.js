import styled, { keyframes } from "styled-components";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 38em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const Mobile = styled.div`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  background-image: url("https://i.stack.imgur.com/yLOOp.jpg");
  border-radius: 50px;
  overflow: hidden;
`;

export const TeamMembersContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
  background-color: blue;
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

`;

export const MobileFrame = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: ${({ zIndex }) => zIndex};
  user-select: none; // Disable text selection while swiping
  touch-action: manipulation; // Improve touch handling
  -webkit-user-drag: none;

`;

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
  border-radius: 50%;
  border: 3px solid #3498db;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  top: -3px;
  left: -3px;
`;
export const InnerSpinner = styled(OuterSpinner)`
  animation: ${spin} 2s linear reverse infinite;
  border-top: 3px solid #fff;
`;

export const Time = styled.p`
  color: white;
  font-size: 10px;
  position: absolute;
  top: 12px;
  left: 24px;
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
