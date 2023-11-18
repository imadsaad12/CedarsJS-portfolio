import React, { useState, useRef } from "react";
import {
  Carousel,
  CarouselContainer,
  Light,
  Moon,
  ArrowLeft,
  ArrowRight
} from "./styles";
import Card from "./card";
import Pagination from "./pagination";
import moon from "../../../../static/teammobile/moon.png";


export default function Slider({ teamMembers }) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const divRef = useRef(null);
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };
  const handleleft = () =>
    currentIndex + 1 < teamMembers.length && setCurrentIndex(currentIndex + 1);

  const handleright = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleTouchMove = (event) => {
    if (startX) {
      const currentX = event.touches[0].clientX;
      const deltaX = currentX - startX;

      if (deltaX > 5) {
        handleright();
      } else if (deltaX < -5) {
        handleleft();
      }

      setStartX(null);
    }
  };

  return (
    <Carousel>

      <CarouselContainer
        ref={divRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ArrowLeft size={"30px"} onClick={handleright} />
        <ArrowRight size={"30px"} onClick={handleleft}/>

        <Moon src={moon} />

        {teamMembers.map((member, index) => (
          <Card index={index} currentIndex={currentIndex} member={member} />
        ))}
      </CarouselContainer>
      <Pagination teamMembers={teamMembers} currentIndex={currentIndex} />
      <Light />
    </Carousel>
  );
}
