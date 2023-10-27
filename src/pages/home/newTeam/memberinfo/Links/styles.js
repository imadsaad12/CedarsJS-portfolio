import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  position: absolute;
  left: 15%;
  bottom: 14%;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 12;
  gap: 10px;
`;

export const Link = styled.div`
  background: linear-gradient(
    to left,
    ${({ theme: { colors } }) => colors.blue},
    ${({ theme: { colors } }) => colors.green}
  );
  border-radius: 20px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Text = styled.span`
  font-size: 12px;
`;
export const Icon = {
  marginLeft: "10px",
};
