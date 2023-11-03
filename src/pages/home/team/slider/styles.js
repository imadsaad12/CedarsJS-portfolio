import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 45em;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Abstract = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  mix-blend-mode: lighten;
  opacity: 0.5;
`;
