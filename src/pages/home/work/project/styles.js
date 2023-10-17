import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 3em;
  height: 22em;
  position: relative;
`;

export const SmallSkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2em;
  align-items: center;
`;

export const SmallScreenImage = styled.img`
  width: 100%;
  height: 70%;
`;

export const SmallTitle = styled.p`
  color: ${(props) => props.theme.colors.secondaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  font-size: 15px;
`;

export const MainTitle = styled(SmallTitle)`
  margin-top: -10px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-size: 25px;
  font-weight: bold;
`;
