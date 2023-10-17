import styled from "styled-components";

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  color: ${(props) => props.theme.colors.primaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  align-items: center;
  justify-content: center;
`;
export const Description = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  opacity: 0.7;
  width: 70%;
  line-height: 25px;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 91%;
    font-size: 15px;
  }
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #112240;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20em;
  width: 100%;
  align-self: center;
  margin-bottom: 2em;
`;
export const Text = styled.pre`
  font-size: 15px;
`;
export const Website = styled.a`
  font-size: 15px;
  color: ${(props) => props.theme.colors.secondaryFontColor};
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  outline: none;
  text-decoration: none;
`;
