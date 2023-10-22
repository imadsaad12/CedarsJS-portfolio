import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transition: all 1s ease-in-out;
  opacity: ${(props) => (props.index === props.currentIndex ? "1" : "0")};
  transform: ${(props) =>
    `translateX(${(props.index - props.currentIndex) * 100}%)`};
`;

export const Card = styled.div`
  width: 70%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 30px;
  margin-top: 40px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Profile = styled.img`
  height: 90%;
  position: absolute;
  width: 95%;
  bottom: 48px;
`;
export const Name = styled.span`
  position: absolute;
  /* bottom: 22px; */
  font-size: 30px;
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  color: white;
  letter-spacing: 3px;
  bottom: 30px;
  transition: all 1s ease-in-out;
`;
export const Family = styled.span`
  position: absolute;
  bottom: 8px;
  font-size: 20px;
  font-family: ${(props) => props.theme.fontsFamily.primaryFontFamily};
  color: white;
  transition: all 1s ease-in-out;
`;
