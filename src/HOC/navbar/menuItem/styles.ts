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
  width: fit-content;
  height: 35px;
  gap: ${(props) => !props.isSideBar && "5px"};
  line-height: 1px;
  font-size: ${(props) => (props.isSideBar ? "13px" : "10px")};
  color: ${({ theme: { colors } }) => colors.white};
  overflow: hidden;
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
    transition: 400ms ease all;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
  font-size: 14px;
  z-index: 20;
`;
export const Number = styled.p`
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
  color: ${({ theme: { colors } }) => colors.green};
`;
