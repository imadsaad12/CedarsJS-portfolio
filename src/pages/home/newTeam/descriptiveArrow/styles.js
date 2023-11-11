import styled from "styled-components";

export const ClickContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 30%;
  display: flex;
  flex-direction: row;
  z-index: 12;
  @media (max-width: 2000px) {
    left: 9%;
  }
  @media (max-width: 1800px) {
    left: 5%;
  }
  @media (max-width: 1600px) {
    left: 3%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.xl}px) {
    left: 2%;
  }
  @media (max-width: 1400px) {
    left: 0%;
  }
  @media (max-width: 1300px) {
    left: -9%;
  }
  @media (max-width: 1100px) {
    left: -15%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    left: 0%;
  }
  @media (max-width: 800px) {
    left: -5%;
  }
`;

export const Arrow = styled.img`
  width: 150px;
  height: 70px;
  left: 0;
`;

export const ClickText = styled.pre`
  margin-top: 70px;

  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;
