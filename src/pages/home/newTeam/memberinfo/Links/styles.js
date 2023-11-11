import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
0%{
transform-origin: left;
transform:scaleX(0);
}
100%{
  transform:scaleX(1);
  transform-origin: left;
}
`;
// export const Container = styled.div`
//   position: absolute;
//   left: 15%;
//   bottom: 14%;
//   width: 200px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   z-index: 12;
//   gap: 10px;
//   /* animation: ${fadeIn} 0.4s linear; */
// `;
export const Container = styled.div`
  position: absolute;
  left: 15%;
  bottom: 14%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 12;
  gap: 10px;

  & > :first-child {
    animation: ${fadeIn} 0.7s ease-in-out;
  }

  & > :nth-child(2) {
    animation: ${fadeIn} 0.9s ease-in-out;
  }
  & > :nth-child(3) {
    animation: ${fadeIn} 1.1s ease-in-out;
  }
  @media (max-width: 2000px) {
    left: 18%;
  }
  @media (max-width: 1800px) {
    left: 15%;
  }
  @media (max-width: 1600px) {
    left: 12%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.xl}px) {
    left: 10%;
  }
  @media (max-width: 1400px) {
    left: 7%;
  }
  @media (max-width: 1300px) {
    left: 5%;
  }
  @media (max-width: 1100px) {
    left: 0%;
  }
  @media (max-width: ${({ theme: { breakingPoints } }) =>
      breakingPoints.md}px) {
    left: 10%;
  }
  @media (max-width: 800px) {
    left: 10%;
  }
`;
export const Link = styled.div`
  background: linear-gradient(
    to left,
    ${({ theme: { colors } }) => colors.blue},
    ${({ theme: { colors } }) => colors.green}
  );
  border-radius: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Text = styled.span`
  font-size: 12px;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;
export const Icon = {
  marginLeft: "10px",
};
