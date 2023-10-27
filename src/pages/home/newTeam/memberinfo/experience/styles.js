import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% { 
    transform: rotate(0deg); 
  }
   100%{ 
    /* border-right: 15px solid #fff;
    border-top: 15px solid #fff; */
    transform: rotate(360deg); 
  }
`;
// export const OuterSpinner = styled.div`
//   border-radius: 50%;
//   border: 15px solid #3498db;
//   border-bottom: 15px solid #fff;
//   border-right: 15px solid #fff;
//   width: 120px;
//   height: 120px;
//   animation: ${spin} 0.8s ease-in;
//   position: absolute;
//   z-index: 10;
//   right: 20%;
//   top: 54%;
//   background: ${({ theme: { colors } }) => colors.blue};
// `;

export const OuterSpinner = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: 60px auto;
  border-radius: 50%;
  z-index: 20;
  right: 18%;
  bottom: 2%;
`;
export const SVG = styled.svg`
  transform: rotate(-90deg);
`;

export const Text = styled.pre`
  font-size: 15px;
  color: white;
  align-self: center;
  justify-self: center;
  z-index: 12;
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
