import styled from "styled-components";

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
  width: 150px;
  height: 400px;
  border-radius: 50%;
  /* filter: blur(100px); */
  position: absolute;
  bottom: 10%;
  z-index: 4;
  left: 0;
`;
