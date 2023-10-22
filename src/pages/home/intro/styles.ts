import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10em;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    margin-top: 5em;
  }
`;

export const Header = styled.p`
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  font-size: 60px;
  line-height: 1px;
  color: ${(props) => props.theme.colors.dark};
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    font-size: 45px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    font-size: 35px;
  }
`;

export const SubHeader = styled.p`
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  font-size: 50px;
  color: ${(props) => props.theme.colors.light};
  opacity: 0.5;
  margin-top: -20px;
  word-wrap: none;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    font-size: 35px;
    margin-top: -5px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  margin-top: -10px;
  font-size: 20px;
  color: ${(props) => props.theme.colors.light};
  opacity: 0.7;
  width: 70%;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const SmallText = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  line-height: 1px;
`;
