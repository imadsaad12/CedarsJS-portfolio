import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-radius: 10px;
`;

const IconAnimation = keyframes`
0%{
  opacity: 0;
  left:0em;
}
100%{
  left:1em;
  opacity: 1;

}

`;
export const LinkedInContainer = styled.span`
  position: absolute;
  top: 1.5em;
  left: 1em;
  display: none;
  animation: ${IconAnimation} 0.5s ease-in-out;
  cursor: pointer;
`;
export const GmailContainer = styled.span`
  position: absolute;
  top: 3em;
  left: 1em;
  display: none;
  animation: ${IconAnimation} 0.8s ease-in-out;
  cursor: pointer;
`;
export const NameText = styled.span`
  margin-left: 10px;
  font-weight: bold;
  font-size: 11px;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: calc(60% + 25px);
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 25px;
  color: white;
  z-index: 4;
  font-family: ${(props) => props.theme.fontsFamily.FontFamily};
  flex-direction: column;
  &:hover ${LinkedInContainer} {
    display: block;
  }
  &:hover ${GmailContainer} {
    display: block;
  }
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
  border: 2px solid ${({ theme: { colors } }) => colors.white};
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: calc(60% + 25px);
  position: relative;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  /* filter: grayscale(100%) contrast(1) brightness(90%); */
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
  background-color: ${({ theme: { colors } }) => colors.background};
  height: ${(props) => props.upperHeight}%;
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
  height: ${(props) => props.bottomHeight}%;
  transform-origin: bottom;
  transform: scaleY(0);
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.background};
  animation: ${decreaseBottomHeight} 1.5s ease-in-out;
  /* animation-delay: 0.5s; */
  z-index: 4;
  transition: transform 0.6s ease-in-out;
`;

export const ColorLayer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  mix-blend-mode: screen;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
`;
