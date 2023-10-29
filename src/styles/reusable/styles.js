import styled, { keyframes } from "styled-components";

export const Light = styled.div`
  background-color: #348fc5;
  width: ${({ styles: { width } }) => width};
  height: ${({ styles: { height } }) => height};
  border-radius: 50%;
  filter: blur(${({ styles: { blurwidth } }) => blurwidth});
  position: absolute;
  bottom:  ${({ styles: { bottom } }) => bottom};
  left: ${({ styles: { left } }) => left};
  top: ${({ styles: { top } }) => top};
  right: ${({ styles: { right } }) => right};
  z-index: 4;
`;

export const StarImage = styled.img`
  position: absolute;
  left: ${({ styles: { left } }) => left};
  top: ${({ styles: { top } }) => top};
  filter: ${({ styles: { blur } }) => blur};
  mix-blend-mode: color-dodge;
  width: 30px;
  height: 30px;
`;
export const StarsImage = styled.img`
  position: absolute;
  mix-blend-mode: color-dodge;
  width:  ${({ styles: { width } }) => width};
  height: ${({ styles: { height } }) => height};;
  left: ${({ styles: { left } }) => left};
  top: ${({ styles: { top } }) => top};
  bottom: ${({ styles: { bottom } }) => bottom};
  right: ${({ styles: { right } }) => right};
  opacity: 0.7;
`;
export const CometImage = styled.img`
  /* width: 350px;
height: 400px; */
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  mix-blend-mode: color-dodge;
  width: 60px;
  height: 60px;
`;

export const Planet = styled.div`
  /* width: 350px;
height: 400px; */
  position: absolute;
  box-shadow: inset 0px 0 10px 2px ${(props) => props.theme.colors.blue};
  right: -130px;
  top: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
export const MultiLayerImage = styled.img`
  /* width: 350px;
height: 400px; */
  position: absolute;
  left: 200px;
  top: 100px;
  width: 200px;
  height: 200px;
  mix-blend-mode: color-dodge;
`;
