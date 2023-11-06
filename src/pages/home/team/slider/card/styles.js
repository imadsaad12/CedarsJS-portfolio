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
const imageDisplay = keyframes`
   0% { 
    transform: scale(0); 
  }
   100%{ 
    transform: scale(1); 
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  animation: ${imageDisplay} 0.5s ease-in-out;
  transition: all 1s ease-in-out;
`;
const spin = keyframes`
   0% { 
    transform: rotate(0deg); 
  }
   100%{ 
    transform: rotate(360deg); 
  }
`;


export const TextContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  position: absolute;
width: 320px;
height: 400px;
z-index: 7;
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
export const Moon = styled.img`
position: absolute;
width: 320px;
height: 350px;
z-index: 5;
`;
export const Square = styled.img`
position: absolute;
width: 320px;
height: 350px;
z-index: 6;
`;

export const Face = styled.img`
position: absolute;
width: 320px;
height: 350px;
z-index: 7;
`;
