import styled, { keyframes } from "styled-components";


export const CardContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  left: 0;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
  overflow:hidden;
  background-color: ${(props) => props.theme.colors.secondaryFontColor};

`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: grayscale(100%) contrast(1) brightness(90%);
  mix-blend-mode: multiply;
  transition: all 0.1s ease-in-out;
`;

export const Layer = styled.div`
  background-color: #0a192f;
  mix-blend-mode: screen;
  position: absolute;
  z-index: 3;
  inset: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
  border-radius: 3px;
`;