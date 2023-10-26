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
  width: 70px;
  height: 35px;
  gap: ${(props) => !props.isSideBar && "5px"};
  line-height: 1px;
  font-size: ${(props) => (props.isSideBar ? "13px" : "10px")};
  color: ${({ theme: { colors }, isSideBar }) =>
    isSideBar ? colors.black : colors.white};
  overflow: hidden;
  /* border-radius: 20px; */
  &:hover {
    color: white;
    background: transparent;
    box-shadow: none;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: ${({ theme: { colors } }) =>
      `linear-gradient( ${colors.blue}, ${colors.green})`};
    /* box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002; */
    transition: 400ms ease all;
  }
  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  /* &:hover {
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
  } */
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  z-index: 20;
`;
