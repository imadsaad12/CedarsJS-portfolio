import styled from "styled-components";

type ContainerProps = {
  isSideBar: boolean;
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.isSideBar ? "column" : "row")};
  align-items: center;
  gap: ${(props) => !props.isSideBar && "5px"};
  line-height: 1px;
  font-size: ${(props) => (props.isSideBar ? "13px" : "10px")};
  color: ${(props) => props.isSideBar ? props.theme.colors.dark: props.theme.colors.background};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.dark};
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
`;

export const Number = styled(Text)<ContainerProps>`
  color: ${(props) =>
    props.isSideBar
      ? props.theme.colors.dark
      : props.theme.colors.background};
`;
