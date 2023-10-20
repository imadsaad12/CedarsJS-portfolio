import styled from "styled-components";

export const Description = styled.p`
  font-size: 20px;
  margin-top: -5px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-family: sans-serif;
  opacity: 0.7;
  width: 100%;
  line-height: 25px;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    font-size: 15px;
    width: 95%;
  }
`;
export const DescriptionContainer = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 17em;
  width: 90%;
  align-self: center;
  margin-bottom: 2em;
  background-color: #112240;
  border-radius: 5px;
`;
export const Text = styled.pre`
  font-size: 15px;
`;
export const Header = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-left: 5%;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

export const Logo = styled.img`
  width: 65px;
  height: 55px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  letter-spacing: 2px;
`;

export const SkillsContainer = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 17px;
`;
export const Skill = styled(Title)`
  font-size: 12px;
  opacity: 0.6;
  font-weight: 100;
  letter-spacing: 1px;
`;
