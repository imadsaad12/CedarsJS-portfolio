import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;
export const TextContainer = styled.div`
  width: 58%;
  height: 72%;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
  color: white;
  z-index: 20;
  font-family: ${(props) => props.theme.fontsFamily.FontFamily};

  flex-direction: column;
`;
export const NameText = styled.span`
margin-left: 10px;
font-weight: bold;
font-size: 11px;

`;
export const JobText = styled.span`
margin-left: 10px;
font-size: 9px;

`;
export const BorderBox = styled.div`
  width: 70%;
  height: 70%;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
  /* inset:-5px; */
  position: absolute;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.colors.secondaryFontColor};
`;
export const ImageContainer = styled.div`
  width: 58%;
  height: 72%;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.secondaryFontColor};

`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  filter: grayscale(100%) contrast(1) brightness(90%);
  mix-blend-mode: multiply;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const decreaseUpperHeight = keyframes`
    0% {
      transform-origin: top;
      transform: scaleY(1);
    }
    50% {
      /* height: 50%; */
      transform-origin: top;
      transform: scaleY(0.99);
    }

    100% {
      transform-origin: top;
      transform: scaleY(0);
    }
`;

export const UpperLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #0f172a;
  height:  ${(props) => props.upperHeight}%;
  transform-origin: top;
  transform: scaleY(0);
  animation: ${decreaseUpperHeight} 1.5s ease-in-out;
  /* animation-delay: 0.5s; */
  z-index: 4;
  transition: transform 0.6s ease-in-out;
`;

const decreaseBottomHeight = keyframes`
    0% {
      /* height: 50%; */
      transform-origin: bottom;
      transform: scaleY(1);
    }
    50% {
      /* height: 50%; */
      transform-origin: bottom;
      transform: scaleY(0.99);
    }

    100% {
      /* height: 0%; */
      transform-origin: bottom;
      transform: scaleY(0);
    }
`;
export const BottomLayer = styled.div`
  height:  ${(props) => props.bottomHeight}%;
  transform-origin: bottom;
  transform: scaleY(0);
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #0f172a;
  animation: ${decreaseBottomHeight} 1.5s ease-in-out;
  /* animation-delay: 0.5s; */
  z-index: 4;
  transition: transform 0.6s ease-in-out;

`;

export const ColorLayer = styled.div`
  background-color: #0a192f;
  mix-blend-mode: screen;
  position: absolute;
  z-index: 3;
  inset: 3px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
`;
