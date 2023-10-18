import styled from "styled-components";

export const DetailsContainer = styled.div`
  flex: 0.7;
  position: absolute;
  right: 0;
  height: 100%;
  width: 50%;
  z-index: 4;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-size: 24px;
`;
export const SubTitle = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondaryFontColor};
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  background-color: #112240;
  color: ${(props) => props.theme.colors.primaryFontColor};
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const Description = styled.span`
  font-size: 15px;
  width: 90%;
`;
export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  font-weight: bold;
`;

export const SkillsContainer = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 2em;
`;
export const SkillsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};

  gap: 12px;
  font-size: 15px;
  opacity: 0.5;
`;
export const Skill = styled.li``;

export const IconsContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  color: ${(props) => props.theme.colors.primaryFontColor};
  margin-top: 1em;
  gap: 12px;
  font-size: 18px;
`;
