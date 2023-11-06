import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: height 0.5s ease, transform 0.5s ease, filter 1s ease,
    opacity 0.5s ease;
  border-radius: 20px;
  overflow: hidden;
  z-index: 999;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  transform: ${(props) =>
    `translateX(${(props.index - props.currentIndex) * 105}%)`};
`;

const AniText=keyframes`
0%{
  opacity: 0;


}
80%{
  opacity: 0;


}
100%{

  opacity: 1;

}
`


export const TextContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
width: 320px;
height: 400px;
z-index: 7;
animation:  2.8s ${AniText}  ease-in-out;

`;
export const DetectorContainer = styled.div`
position: absolute;
width: 320px;
height: 400px;
z-index: 7;
display: flex;
justify-content: center;

`;

const AniDetector=keyframes`
0%{
  top:100px;
  width: 50px;
  opacity: 0;
}
50%{
  top:170px;
  width: 100px;
  opacity: 1;

}
75%{
  opacity: 1;

}
100%{
  top:240px;
  width: 50px;
  opacity: 0;

}
`
export const Detector = styled.div`
position: absolute;
height: 3px;
width: 90px;
opacity: 0;
z-index: 7;
background-color: ${({ theme: { colors } }) => colors.green};;
animation:  2s ${AniDetector}  ease-in-out;

`;
export const Work = styled.span`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 10px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const Name = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 25px;
  font-family: ${(props) => props.theme.fontsFamily.secondaryFontFamily};
  font-weight: bold;
  margin-left: 10px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10%;
  height: 30px;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: all 0.3s ease-in-out;
`;




export const Member = styled.img`
width: 320px;
height: 350px;
position: absolute;
z-index: 6;
`;

const AniSquare=keyframes`

40%{
  opacity: 0;
  width: 0px;
  height: 0px;

}
100%{
  width: 320px;
height: 350px;
  opacity: 1;

}
`
export const Square = styled.img`
position: absolute;
width: 320px;
height: 350px;
z-index: 6;
animation:  2s ${AniSquare}  ease-in-out;

`;


const AniFace=keyframes`
0%{
  opacity: 0;
  width: 0px;
  height: 0px;

}
80%{
  opacity: 0;
  width: 0px;
  height: 0px;

}
100%{
  width: 320px;
height: 350px;
  opacity: 1;

}
`




export const Face = styled.img`
position: absolute;
width: 320px;
height: 350px;
z-index: 7;
animation:  2.3s ${AniFace}  ease-in-out;

`;

