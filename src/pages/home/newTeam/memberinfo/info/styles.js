import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
transform: scale(0);
opacity: 0;
}

100%{
  transform: scale(1);
  opacity: 1;

}
`;
export const Container = styled.div`
  position: absolute;
  background-color: ${({ theme: { colors } }) => colors.white};
  right: 10%;
  top: 23%;
  width: 250px;
  height: 150px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 12;
  animation: ${fadeIn} 0.4s linear;
  opacity: 1;

`;
export const CodeContainer = styled.div`
  display: flex;

  flex-direction: row;
  width: 80%;
`;

export const Code = styled.pre`
  /* background-color: red; */
  display: inline-block;
  margin: 0;
  color: ${(props) => (props.colored ? "#2590F1" : "none")};
`;
export const Nav = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15%;
  gap: 5px;
  padding-left: 20px;
  background: linear-gradient(
    to right,
    ${({ theme: { colors } }) => colors.blue},
    ${({ theme: { colors } }) => colors.green}
  );
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
