import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  box-sizing: inherit;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin: 0px 0px 20px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.white};
  line-height: 1.1;
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.SFMonoBold};
  @media (max-width: ${(props) =>
      props.theme.breakingPoints.sm}px) and (min-width: ${(props) =>
      props.theme.breakingPoints.xs}px) {
    font-size: 30px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin: 0px;
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fontsFamily } }) => fontsFamily.CalibreLight};
`;

export const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.gray};
  background-color: transparent;
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  line-height: 1;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-top: 50px;
  cursor: pointer;
  &:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 ${({ theme: { colors } }) => colors.white};
    transform: translate(-5px, -5px);
  }
`;
