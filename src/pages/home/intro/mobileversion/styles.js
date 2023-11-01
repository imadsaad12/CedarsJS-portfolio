import styled, { keyframes } from "styled-components";

export const Stars = styled.img`
position: absolute;
  width: 100%;
  top: 0;
  z-index: 4;
  height: 100%;
  mix-blend-mode: color-dodge;
`;
export const Earth = styled.img`
position: absolute;
  bottom: 0;
  z-index: 5;
  width: ${(props)=>props.scrolled?"100px":"490px"};
  height: ${(props)=>props.scrolled?"100px":"490px"};
  right: ${(props)=>props.scrolled?"0":"-9em"};
  transition: all 1s ease-in-out;

`;
export const OverlayLight = styled.img`
position: absolute;
  bottom: 0;
  z-index: 6;
  width: ${(props)=>props.scrolled?"100px":"490px"};
  height:${(props)=>props.scrolled?"100px":"490px"};
  right: -9em;
  mix-blend-mode: overlay;

`;
export const ScreenLight = styled.img`
position: absolute;
  bottom: 0;
  z-index: 6;
  width: 490px;
  height: 490px;
  right: -7em;
  mix-blend-mode: overlay;

`;

export const TitleContainer = styled.div`
position: absolute;
font-size: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 10%;
    color:${(props) => props.theme.colors.white};
`;

export const Letter = styled.span`
    font-family: ${({ theme: { fontsFamily } }) => fontsFamily.Sphere};

`;




