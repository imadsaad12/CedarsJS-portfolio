import styled from "styled-components";




export const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakingPoints.xs}px) {
    /* margin-top: 5em; */
  }
`;


export const Header = styled.div`
  height: 5em;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Number = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  color: ${(props) => props.theme.colors.secondaryFontColor};
  letter-spacing: 1px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 25px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  color: ${(props) => props.theme.colors.primaryFontColor};
  height: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Line = styled.span`
height: 0.5px;
flex:1;
background-color: ${(props) => props.theme.colors.primaryFontColor};
margin-left: 10px;
opacity: 0.2;
`;

export const MembersLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  /* height: 30em; */

`;
