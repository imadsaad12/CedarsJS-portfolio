import styled from "styled-components";

export const Container = styled.div`
  width: 65%;
  display: flex;
  height: auto;
  margin-top: 10em;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    margin-top: 5em;
    width: 100%;

  }
`;

export const Header = styled.div`
  height: 5em;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    width: 90%;
  }
`;
export const Number = styled.span`
  font-size: 25px;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoLight};
  color: ${({ theme: { colors } }) => colors.green};
  letter-spacing: 1px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoHeavy};
  color: ${({ theme: { colors } }) => colors.white};
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    font-size: 18px;
  }
`;

export const Line = styled.div`
  height: 0.5px;
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin-left: 10px;
  opacity: 0.2;
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    display: none;
  }
`;
