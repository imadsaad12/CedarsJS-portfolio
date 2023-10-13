import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
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
  color: ${(props) => props.theme.colors.secondaryFontColor};
  letter-spacing: 1px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  color: ${(props) => props.theme.colors.primaryFontColor};
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
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
  height: 20em;
`;

export const growAndCurveAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
`;

export const DrawingContainer = styled.div`
  width: 96%;
  height: 0.5px;
  align-self: center;
  display: ${(props) => (props.isClicked ? "block" : "none")};
  justify-self: center;
  animation: ${growAndCurveAnimation} 0.4s linear;
  align-self: center;
  background: ${(props) => props.theme.colors.primaryFontColor};
  opacity: 0.6;
`;

export const Circle = styled.div`
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  right: 10px;
  background-color: ${(props) => props.theme.colors.primaryFontColor};
  opacity: 0.6;
`;
export const LinesContainer = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 15px;
  position: relative;
`;
export const LineContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
