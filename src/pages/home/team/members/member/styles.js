import styled from "styled-components";

export const Layer = styled.div`
  background-color: transparent;
  mix-blend-mode: none;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  transition: all 0.1s ease-in-out;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  filter: ${({ isClicked }) =>
    isClicked ? "grayscale(100%)" : "grayscale(0%)"};
  filter: contrast(1);
  filter: brightness(90%);
  mix-blend-mode: ${({ isClicked }) => (isClicked ? "multiply" : "none")};

  transition: all 1s ease-in-out;
`;

export const Container = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ColorLayer = styled.div`
  background-color: ${({ theme: { colors }, isClicked }) =>
    isClicked ? colors.gray : "transparent"};
  width: 65px;
  height: 65px;
  border-radius: 50%;
  mix-blend-mode: ${({ isClicked }) => (isClicked ? "screen" : "none")};
  position: absolute;
  z-index: 3;
  inset: 0px;

  /* transition: all 1s ease-in-out; */
`;

export const MemberWrapper = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme: { colors }, isClicked }) =>
    isClicked ? colors.white : "transparent"};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
