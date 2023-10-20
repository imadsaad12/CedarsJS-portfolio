import React, { useState, useRef } from "react";
import { Carousel, CarouselContainer } from "./styles";
import Card from "./card";
export default function Slider({ teamMembers }) {
  const [currentIndex, setCurrentIndex] = useState(0);
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

      if (deltaX > 0) {
        handleright();
      } else if (deltaX < 0) {
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
        {teamMembers.map((member, index) => (
          <Card
            index={index}
            currentIndex={currentIndex}
            member={member}
            teamMembers={teamMembers}
          />
        ))}
      </CarouselContainer>
    </Carousel>
  );
}
