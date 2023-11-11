import styled, { keyframes } from "styled-components";

export const OuterSpinner = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: 60px auto;
  border-radius: 50%;
  z-index: 20;
  right: 18%;
  bottom: 2%;
  @media (max-width: 2000px) {
    right: 24%;
  }
  @media (max-width: 1800px) {
    right: 20%;
  }
  @media (max-width: 1600px) {
    right: 18%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.xl}px) {
    right: 20%;
  }
  @media (max-width: 1400px) {
    right: 18%;
  }
  @media (max-width: 1300px) {
    right: 7%;
  }
  @media (max-width: 1100px) {
    right: 5%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    right: 18%;
  }
  @media (max-width: 800px) {
    right: 10%;
  }
`;
export const SVG = styled.svg`
  transform: rotate(-90deg);
`;

export const Text = styled.pre`
  font-size: 35px;
  font-weight: bold;
  color: white;
  align-self: center;
  justify-self: center;
  z-index: 12;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;

export const Years = styled.p`
  font-size: 15px;
  margin-top: -25px;
  color: white;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;

const html = keyframes`
to{
  stroke-dashoffset:0;
}
`;
export const Circle = styled.circle`
  stroke-dasharray: 880;
  stroke-dashoffset: 880;
  animation: ${html} 2.5s normal forwards;
`;
export const Content = styled.div`
  display: flex;
  width: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25%;
  top: 18%;
  z-index: 100;
`;
