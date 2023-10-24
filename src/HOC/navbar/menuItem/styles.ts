import styled, { keyframes } from "styled-components";

type ContainerProps = {
  isSideBar: boolean;
};

const border = keyframes`
0%{
  transform: rotate(0deg);
}
100%{
  transform: rotate(360deg);
}
`;
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 35px;
  gap: ${(props) => !props.isSideBar && "5px"};
  line-height: 1px;
  font-size: ${(props) => (props.isSideBar ? "13px" : "10px")};
  color: ${({ theme: { colors }, isSideBar }) =>
    isSideBar ? colors.black : colors.white};
  overflow: hidden;
  border-radius: 20px;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      width: 200px;
      height: 30px;
      background: ${({ theme: { colors } }) =>
        `linear-gradient( ${colors.blue}, ${colors.green})`};
      animation: ${border} 4s linear infinite;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: ${({ theme: { colors } }) => colors.background};
      inset: 2px;
    }
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  z-index: 20;
`;
