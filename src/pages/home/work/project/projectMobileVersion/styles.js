import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2em;
  align-self: center;
  width: 60%;
  @media (max-width: 650px) {
    width: 80%;
  }
`;
export const Description = styled.p`
  font-size: 20px;
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
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4%;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 21em;
  width: 100%;
  margin-bottom: 3em;
  background-color: #112240;
  border-radius: 10px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  position: relative;
`;
export const Text = styled.pre`
  font-size: 15px;
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  position: absolute;
  align-self: center;
  top: -40px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  letter-spacing: 2px;
  text-align: center;
`;
export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  gap: 17px;
`;
export const Skill = styled.p`
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  text-align: center;
  font-size: 12px;
  opacity: 0.6;
  letter-spacing: 1px;
`;
export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colors.secondaryFontColor};
  font-size: 13px;
  margin-top: -10px;
  margin-bottom: 2em;
`;
export const Divider = styled.div`
  width: 100%;
  align-self: center;
  height: 1px;
  opacity: 0.7;
  background-color: ${(props) => props.theme.colors.primaryFontColor};
  margin-bottom: 10px;
  margin-top: 20px;
`;
