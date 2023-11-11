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
  top: ${(props) => (props.scrolled ? "6em" : "calc(100% - 490px)")};

  z-index: 5;
  width: ${(props) => (props.scrolled ? "200px" : "490px")};
  height: ${(props) => (props.scrolled ? "200px" : "490px")};
  @media (max-width: 500px) {
    left: ${(props) => (props.scrolled ? "30%" : "16%")};
  }
  @media (max-width: 432px) {
    left: ${(props) => (props.scrolled ? "28%" : "16%")};
  }
  @media (max-width: 400px) {
    left: ${(props) => (props.scrolled ? "27%" : "16%")};
  }
  @media (max-width: 380px) {
    left: ${(props) => (props.scrolled ? "25%" : "16%")};
  }
  @media (max-width: 370px) {
    left: ${(props) => (props.scrolled ? "23%" : "16%")};
  }
  @media (max-width: 342px) {
    left: ${(props) => (props.scrolled ? "21%" : "16%")};
  }
  left: ${(props) => (props.scrolled ? "35%" : "25%")};
  transition: all 1s;
`;
export const OverlayLight = styled.img`
  position: absolute;
  top: ${(props) => (props.scrolled ? "6em" : "calc(100% - 490px)")};

  z-index: 6;
  width: ${(props) => (props.scrolled ? "200px" : "490px")};
  height: ${(props) => (props.scrolled ? "200px" : "490px")};
  mix-blend-mode: overlay;
  @media (max-width: 500px) {
    left: ${(props) => (props.scrolled ? "30%" : "16%")};
  }
  @media (max-width: 432px) {
    left: ${(props) => (props.scrolled ? "28%" : "16%")};
  }
  @media (max-width: 400px) {
    left: ${(props) => (props.scrolled ? "27%" : "16%")};
  }
  @media (max-width: 380px) {
    left: ${(props) => (props.scrolled ? "25%" : "16%")};
  }
  @media (max-width: 370px) {
    left: ${(props) => (props.scrolled ? "23%" : "16%")};
  }
  @media (max-width: 342px) {
    left: ${(props) => (props.scrolled ? "21%" : "16%")};
  }
  left: ${(props) => (props.scrolled ? "35%" : "25%")};

  transition: all 1s;
`;

export const Letter = styled.span`
  position: absolute;
  font-size: ${(props) => (props.scrolled ? "2em" : "3em")};
  top: ${(props) => (props.scrolled ? "5.5em" : props.top)};
  left: ${(props) => (props.scrolled ? props.left : "10%")};
  color: ${(props) => props.theme.colors.white};
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.Sphere};
  transition: all 1s ease-in-out;
  z-index: ${(props) => (props.scrolled ? "6" : "3")};
`;

export const Light = styled.div`
  width: 1px;
  height: 1px;
  border-radius: 60%;
  box-shadow: 0 0 100px 100px #348fc5;
  opacity: 0.4;
  position: absolute;
  bottom: ${({ styles: { bottom } }) => bottom};
  left: ${({ styles: { left } }) => left};
  top: ${({ styles: { top } }) => top};
  right: ${({ styles: { right } }) => right};
  z-index: 3;
`;

export const DescriptionContainer = styled.div`
  position: absolute;
  left: 30%;
  bottom: ${(props) => (props.scrolled ? "20em" : "40em")};

  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreLight};
  font-size: 12px;
  transition: all 1s ease-in-out;
  width: 100px;
  color: ${({ theme: { colors } }) => colors.white};
  padding-left: 10px;
`;
export const Border = styled.div`
  position: absolute;
  left: 0;
  width: 1px;
  background-color: white;
  opacity: 0.5;
  height: 100%;
`;

export const Description = styled.span``;

const animatedescription = keyframes`
0%{
  right:0%;
  opacity: 0;

}
30%{
  right:0%;
  opacity: 0;
}
100%{
  right:30%;
  opacity: 1;

}
`;
export const DescriptionContainer2 = styled.div`
  position: absolute;
  right: 30%;
  display: ${(props) => (props.scrolled ? "flex" : "none")};
  bottom: 10em;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreLight};
  font-size: 12px;
  transition: all 1s ease-in-out;
  width: 110px;
  color: ${({ theme: { colors } }) => colors.white};
  padding-right: 10px;
  animation: 1.5s ${animatedescription} ease-in-out;
`;

export const Border2 = styled.div`
  position: absolute;
  right: 0;
  width: 1px;
  background-color: white;
  opacity: 0.5;
  height: 100%;
`;
