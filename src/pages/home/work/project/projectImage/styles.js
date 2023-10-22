import styled from "styled-components";

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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: grayscale(100%) contrast(1) brightness(90%);
  mix-blend-mode: multiply;
  transition: all 0.1s ease-in-out;
`;

export const ImageContainer = styled.div`
  width: ${(props) => (props.isSmallScreen ? "100%" : "60%")};
  background-color: ${(props) => props.theme.colors.background};
  position: relative;
  cursor: pointer;
  &:hover ${Layer} {
    inset: 0px;
    background-color: transparent;
    mix-blend-mode: none;
  }
  &:hover ${ImageWrapper} {
    filter: grayscale(0%) contrast(1) brightness(90%);
    mix-blend-mode: normal;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 15em;
  }
`;
