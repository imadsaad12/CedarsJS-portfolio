import styled from "styled-components";

export const EmailContainer = styled.div`
  position: fixed;
  height: 20px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.primaryFontColor};
  right: -130px;
  bottom: 19%;
  transform: rotate(90deg);
  gap: 15px;

  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    right: -150px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    display: none;
  }
`;

export const Email = styled.p`
  letter-spacing: 3px;
  width: 50%;
  &:hover {
    color: ${(props) => props.theme.colors.navBar};
    cursor: pointer;
    margin-left: -10px;
    transition: all 0.1s ease-in-out;
  }
`;
export const Line = styled.div`
  width: 150px;
  border: 1px solid #a8b2d1;
`;

export const SocialMediaContainer = styled.div`
  position: fixed;
  height: 20px;
  width: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 19%;
  transform: rotate(90deg);
  gap: 15px;
  color: ${(props) => props.theme.colors.primaryFontColor};
  left: -130px;
  @media (max-width: ${(props) => props.theme.breakingPoints.md}px) {
    left: -150px;
  }
  @media (max-width: ${(props) => props.theme.breakingPoints.sm}px) {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  height: 150px;
  width: 50%;
  position: relative;
  padding: 20px;
`;
export const IconContainer = styled.div`
  position: absolute;
  &:hover {
    color: ${(props) => props.theme.colors.navBar};
    cursor: pointer;
    margin-top: -10px;
    transition: all 0.2s ease-in-out;
  }
`;
