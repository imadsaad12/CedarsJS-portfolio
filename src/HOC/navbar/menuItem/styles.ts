import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondaryFontColor};
  }
`;

export const Text = styled.p`
  font-size: 10px;
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
`;

export const Number = styled(Text)``;
