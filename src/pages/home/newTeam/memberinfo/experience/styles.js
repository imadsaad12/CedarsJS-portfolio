import styled, { keyframes } from "styled-components";

export const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: stroke-dashoffset 1s ease;
  background-color: transparent;
`;

export const PercentageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
`;
