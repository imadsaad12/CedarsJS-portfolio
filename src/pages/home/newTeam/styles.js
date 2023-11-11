import styled, { keyframes } from "styled-components";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const Container = styled.div`
  width: 90%;
  height: 38em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
  align-self: center;
`;

export const Mobile = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("https://i.stack.imgur.com/yLOOp.jpg");
  border-radius: 50px;
  overflow: hidden;

  @media (max-width: 2000px) {
    width: 35%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.lg}px) {
    width: 45%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    width: 37%;
  }
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
