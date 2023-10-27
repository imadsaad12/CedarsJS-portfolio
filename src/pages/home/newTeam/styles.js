import styled, { keyframes } from "styled-components";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Container = styled.div`
  width: 79%;
  height: 38em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  align-self: center;
`;

export const Mobile = styled.div`
  width: 42%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("https://i.stack.imgur.com/yLOOp.jpg");
  border-radius: 50px;
  overflow: hidden;
`;
export const Stars = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
export const Light = styled.img`
  background-color: #348fc5;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(150px);
  position: absolute;
  right: 0;
  bottom: 0;
  /* left: 100px; */
  z-index: 0;
`;
export const Light2 = styled.img`
  top: 0;
  left: 0;
  background-color: #348fc5;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(150px);
  position: absolute;
  /* left: 100px; */
  z-index: 0;
`;
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

export const SwipeContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 35px;
  width: 100px;
  height: 100px;
  left: 32%;
  color: ${({ theme: { colors } }) => colors.white};
  user-select: none; // Disable text selection while swiping
  touch-action: manipulation; // Improve touch handling
  z-index: 8;
`;
export const Swipe = styled.span`
  user-select: none; // Disable text selection while swiping
  touch-action: manipulation; // Improve touch handling
`;

const IconAnimation = keyframes`
  0% {
    bottom: 20px;
  }
  50% {
    bottom: 40px;
  }
  100% {
    bottom: 20px;
  }
`;

export const AnimatedIcon = styled(MdKeyboardDoubleArrowUp)`
  position: absolute;
  bottom: 0px;
  animation: 1s ${IconAnimation} infinite;
  user-select: none; // Disable text selection while swiping
  touch-action: manipulation; // Improve touch handling
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 20px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 10%;
`;

export const ClickContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 30%;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  z-index: 12;
`;

export const Arrow = styled.img`
  width: 150px;
  height: 70px;
`;

export const ClickText = styled.pre`
  margin-top: 70px;

  color: ${({ theme: { colors } }) => colors.white};
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
