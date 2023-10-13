import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`;
export const TextContainer = styled.div`
  width: 70%;
  height: 70%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 25px;
  color:white;
  font-size:17px;
  z-index: 20;
  text-align: center;
  flex-direction: column;


`;
export const Text = styled.span`



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
  width: 70%;
  height: 70%;
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
  background-color:#0f172a;
  height: 50%;
  transform-origin: top;
  transform: scaleY(0);
  animation: ${decreaseUpperHeight} 1s ease-in-out;
  z-index: 4;

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
  height: 50%;
  transform-origin: bottom;
  transform: scaleY(0);
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color:#0f172a;
  animation: ${decreaseBottomHeight} 1s ease-in-out;
  z-index: 4;

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
