import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 80%;
  background-color:#202735;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: column;
`;
export const MainContainer = styled.div`
  width: 100%;
  height: 7em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const viewcontainer = keyframes`
  0% {
    height: 0em;
  }
  100% {
    height: 7em;
  }
`;



export const Wrapper = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const LogoContainer = styled.div`
  height: 100%;
  flex: 0.4;
  font-size: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.colors.dark},
    rgb(255, 255, 255, 0.1)
  );
  color: white;
  border-radius: 10px;
`;

export const NameContainer = styled.div`
  height: 100%;
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;

export const BorderContainer = styled.div`
  height: 100%;
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Border = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.blue};
  box-shadow: -7px 0 25px 2px ${(props) => props.activeIndex.includes(props.index)?props.theme.colors.blue:"transparent"};
  width: 2px;
`;
export const Name = styled.span`
  font-size: 20px;
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

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255, 0.5);
`;

export const Time = styled.span`
  font-size: 8px;
`;

export const Dash = styled.div`
  height: 0.5px;
  width: 10px;
  background-color: white;
  font-size: 8px;
`;


export const HiddenContainer = styled.div`
  height: 7em;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.activeIndex.includes(props.index) ? "flex" : "none")};
  animation: ${viewcontainer} 0.5s ease-in-out;
  overflow: hidden;
`;

export const HiddenWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgb(255,255,255,0.4);
  align-items: center;
  justify-content: center;
  overflow: hidden;

`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;

`;
export const Skill = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  text-align: center;
  font-size: 12px;
  opacity: 0.6;
  letter-spacing: 1px;
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
  color: white;
  color: rgb(255, 255, 255, 0.8);

`;

export const Description = styled.span`
  font-size: 12px;
  margin-top: 5px;

`;
