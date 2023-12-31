import styled, { keyframes } from "styled-components";

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

export const HandAnimation = keyframes`
  0% {
    bottom: 20px;
  }

  50% {
    bottom: 0px;

  }

  100% {
    bottom: 20px;
  }

`;
export const Hand = styled.img`
  width: 600px;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  mix-blend-mode: color-dodge;
  z-index: 5;
  animation: infinite ${HandAnimation} 4s;
`;
export const CodeAnimation = keyframes`
  0% {
    bottom: 22%;
  }

  50% {
    bottom: 40%;
  }

  100% {
    bottom: 22%;
  }

`;
export const Code = styled.img`
  width: 460px;
  height: 330px;
  position: absolute;
  bottom: 22%;
  left: 50px;
  mix-blend-mode: color-dodge;
  z-index: 5;
  animation: infinite ${CodeAnimation} 4s;
`;

export const Light = styled.div`
  background-color: #348fc5;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  position: absolute;
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  z-index: 4;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding-left: 20px;
`;

export const Title = styled.span`
  font-size: 60px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: left;
  display: inline-block;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreBold};
`;

export const Inspire = styled.span`
  font-size: 60px;
  background: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.blue},
    ${({ theme: { colors } }) => colors.green}
  );
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreBold};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

export const InspireContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

