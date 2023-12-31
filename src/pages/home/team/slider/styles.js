import styled from "styled-components";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Carousel = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Moon = styled.img`
  position: absolute;
  width: 350px;
  height: 350px;
  z-index: 5;
`;
export const Light = styled.div`
  background-color: #348fc5;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  box-shadow: 0 0 100px 100px #348fc5;
  position: absolute;
  top: 40%;
  z-index: 4;
  left: 15%;
  opacity: 0.5;
`;

export const ArrowLeft = styled(MdKeyboardArrowLeft)`
  position: absolute;
  left: 0;
  opacity: 0.7;
  color:${(props) => props.theme.colors.green};
  z-index: 10;


`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  position: absolute;
  right: 0;
  opacity: 0.7;
  color:${(props) => props.theme.colors.green};
  z-index: 10;

`;
