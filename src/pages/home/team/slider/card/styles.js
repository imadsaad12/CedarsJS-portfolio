import styled from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  width: 15em;
  height: 100%;
  transition: height 0.5s ease, transform 0.5s ease, filter 1s ease,opacity 0.5s ease;
  border-radius: 20px;
  overflow: hidden;
  z-index: 999;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Work = styled.span`
color: ${(props) => props.theme.colors.primaryFontColor};;
font-size: 10px;
font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
margin-left: 10px;
margin-bottom: 10px;

`;

export const Name = styled.div`
color: ${(props) => props.theme.colors.primaryFontColor};;
font-size: 18px;
font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
font-weight: bold;
margin-left: 10px;


`;
