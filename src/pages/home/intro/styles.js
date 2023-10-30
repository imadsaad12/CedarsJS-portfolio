import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    margin-top: 5em;
  }
  height: 85vh;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    flex-direction: column;
    margin-top: 0em;
    height: 75vh;
  }
`;

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
  @media (max-width: ${({ theme: { breakingPoints } }) =>breakingPoints.sm}px) {
    width: 350px;
    height: 170px;
    left: 6%;
  }
`;
export const CodeAnimation = keyframes`
  0% {
    bottom: 26%;
  }

  50% {
    bottom: 40%;
  }

  100% {
    bottom: 26%;
  }

`;
export const Code = styled.img`
  width: 460px;
  height: 330px;
  position: absolute;
  bottom: 26%;
  left: 50px;
  mix-blend-mode: color-dodge;
  z-index: 5;
  animation: infinite ${CodeAnimation} 4s;
  @media (max-width: ${({ theme: { breakingPoints } }) =>breakingPoints.sm}px) {
    width: 280px;
    height: 200px;
    left: 13%;
  }
`;

export const Light = styled.div`
  background-color: #348fc5;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  filter: blur(${(props) => props.blurwidth});
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
export const Border = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 1px;
  background-color: white;
  box-shadow: 0px 0 10px 2px
    ${(props) =>
      props.index == props.activeIndex
        ? props.theme.colors.blue
        : "transparent"};
`;

export const Title = styled.span`
  font-size: 60px;
  color: ${({ theme: { colors } }) => colors.white};
  text-align: left;
  display: inline-block;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreBold};
  @media (max-width: ${({ theme: { breakingPoints } }) =>breakingPoints.sm}px) {
    font-size: 50px;
  }
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
  @media (max-width: ${({ theme: { breakingPoints } }) =>breakingPoints.sm}px) {
    font-size: 50px;
  }
`;

export const InspireContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const Stars = styled.img`
  position: absolute;
  left: 0;
  mix-blend-mode: color-dodge;
  width: 100%;
  height: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  opacity: 0.7;
`;
export const Stars2 = styled.img`
  position: absolute;
  right: 0;
  mix-blend-mode: color-dodge;
  width: 1000px;
  height: 400px;
`;

export const Planet = styled.div`

  position: absolute;
  box-shadow: inset 0px 0 10px 2px ${(props) => props.theme.colors.blue};
  right: -130px;
  top: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;
