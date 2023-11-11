import styled, { keyframes } from "styled-components";
import { SiGmail } from "react-icons/si";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  /* background-color: red; */
  position: relative;
  margin-top: 10vh;
`;
const rotate = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  border: 2px solid #ccc;
  border-radius: 50%;
  animation: ${rotate} ${(props) => props.index}s linear infinite;
  transform-origin: center;
  opacity: 0.4;
`;
export const Icon = styled.img`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ isSmallScreen }) => (isSmallScreen ? "30" : "40")}px;
  height: ${({ isSmallScreen }) => (isSmallScreen ? "30" : "40")}px;
`;

export const Light = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  width: 50;
  height: 1px;
  /* filter: blur(40px); */
  box-shadow: 0 0 100px 50px #348fc5;
  position: absolute;
  top: 0;
  z-index: 4;
  opacity: 0.4;
`;
export const Fade = styled.div`
  background-color: #348fc5;
  width: 100%;
  height: 1px;
  box-shadow: 0 0 100px 100px #348fc5;
  position: absolute;
  top: 20px;
  z-index: 10;
  opacity: 0.4;
`;

export const FullStack = styled.span`
  font-size: 45px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: left;
  display: inline-block;
  position: absolute;
  top: 0;
  z-index: 20;
  /* letter-spacing: 6px; */
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreBold};
`;

export const Web = styled.span`
  top: 50px;
  position: absolute;
  z-index: 20;
  font-size: 45px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: left;
  display: inline-block;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreBold};
`;

export const Javascript = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
`;
