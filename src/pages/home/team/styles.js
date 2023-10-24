import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 82%;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  height: 5em;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Number = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  color: ${({ theme: { colors } }) => colors.white};
  letter-spacing: 1px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    font-size: 18px;
  }
`;

export const Line = styled.span`
  height: 0.5px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.primaryFontColor};
  margin-left: 10px;
  opacity: 0.2;
`;

export const MembersLayout = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 2em; */
  height: 24em;
`;

export const growAndCurveAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 94.5%;
  }
`;

export const DrawingContainer = styled.div`
  width: 94.5%;
  height: 0.5px;
  align-self: center;
  display: ${(props) => (props.isClicked ? "block" : "none")};
  justify-self: center;
  animation: ${growAndCurveAnimation} 0.4s linear;
  align-self: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  opacity: 0.6;
  transition: all 0.5s ease-in-out;
`;

export const growcircle = keyframes`
  0% {
    transform: scale(0)
  }
  60% {
    transform: scale(0)

  }
  100% {
    transform: scale(1)

  }
`;
export const Circle = styled.div`
  position: absolute;
  transform-origin: center;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  right: 10px;
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  display: ${(props) => (props.isClicked ? "block" : "none")};
  background-color: ${({ theme: { colors } }) => colors.white};
  opacity: 0.6;
  animation: ${growcircle} 0.6s ease-in-out;

  /* animation-delay: 1s; */
`;
export const LinesContainer = styled.div`
  display: flex;
  flex: 0.7;
  justify-content: center;
  height: 100%;
  align-items: center;
  position: relative;
  align-items: center;
`;
export const LinesLayout = styled.div`
  height: 95%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LineContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;
`;
