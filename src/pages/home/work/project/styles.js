import styled from "styled-components";

export const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 3em;
  height: 22em;
  position: relative;
`;

export const Layer = styled.div`
  background-color: #0a192f;
  mix-blend-mode: screen;
  position: absolute;
  z-index: 3;
  inset: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
  border-radius: 3px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: grayscale(100%) contrast(1) brightness(90%);
  mix-blend-mode: multiply;
  transition: all 0.1s ease-in-out;
`;

export const ImageContainer = styled.div`
  width: 60%;
  background-color: ${(props) => props.theme.colors.secondaryFontColor};
  position: relative;
  cursor: pointer;
  &:hover ${Layer} {
    inset: 0px;
    background-color: transparent;
    mix-blend-mode: none;
  }
  &:hover ${ImageWrapper} {
    filter: grayscale(0%) contrast(1) brightness(90%);
    mix-blend-mode: normal;
  }
`;

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

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
