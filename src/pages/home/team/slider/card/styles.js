import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div`
  position: absolute;
  width: 13em;
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
`;
const imageDisplay = keyframes`
   0% { 
    transform: scale(0); 
  }
   100%{ 
    transform: scale(1); 
  }
`;
export const Image = styled.img`
  width: ${({ isActive }) => (isActive ? "200px" : "150px")};
  height: ${({ isActive }) => (isActive ? "100%" : "150px")};
  border-radius: ${({ isActive }) => (isActive ? "100px" : "50%")};
  /* margin-top: ${({ isActive }) => (isActive ? "0px" : "20px")}; */
  animation: ${imageDisplay} 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;
const spin = keyframes`
   0% { 
    transform: rotate(0deg); 
  }
   100%{ 
    transform: rotate(360deg); 
  }
`;
export const OuterSpinner = styled.div`
  border: 6px solid transparent;
  display: ${({ isActive }) => isActive && "none"};
  border-radius: 50%;
  border-top: 6px solid #fff;
  width: 175px;
  height: 175px;
  animation: ${spin} 3s linear reverse infinite;
  position: absolute;
  top: 1px;
`;
export const InnerSpinner = styled.div`
  border: 6px solid transparent;
  display: ${({ isActive }) => isActive && "none"};
  border-radius: 50%;
  border-left: 6px solid #fff;
  width: 160px;
  height: 160px;
  animation: ${spin} 3s linear infinite;
  position: absolute;
  top: 7px;
`;

export const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  /* align-items: flex-start; */
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  bottom: 20px;
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
  font-size: 18px;
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
