import styled from "styled-components";

export const ClickContainer = styled.div`
  position: absolute;
  left: 0%;
  top: 30%;
  display: flex;
  flex-direction: row;
  z-index: 12;
`;

export const Arrow = styled.img`
  width: 150px;
  height: 70px;
  left: 0;
`;

export const ClickText = styled.pre`
  margin-top: 70px;

  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
`;
