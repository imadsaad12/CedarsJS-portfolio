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
`;
export const Icon = {
  marginLeft: "10px",
};
