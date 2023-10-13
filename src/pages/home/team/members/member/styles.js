import styled from "styled-components";

export const Layer = styled.div`
  background-color: transparent;
  mix-blend-mode: none;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* filter: grayscale(0%) contrast(1) brightness(90%);
  mix-blend-mode: normal; */

  transition: all 0.1s ease-in-out;
`;

export const Container = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  /* border:3px solid ${(props) => props.theme.colors.secondaryFontColor}; */
  /* background-color: ${(props) => props.theme.colors.secondaryFontColor}; */
  position: relative;
  cursor: pointer;
  /* &:hover ${Layer} {
    background-color: #0a192f;
    mix-blend-mode: screen;
  }
  &:hover {
  background-color: ${(props) => props.theme.colors.secondaryFontColor};

  }
  &:hover ${ImageWrapper} {
    filter: grayscale(100%) contrast(1) brightness(90%);
    mix-blend-mode: multiply;
  } */
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
