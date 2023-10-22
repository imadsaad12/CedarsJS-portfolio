import React, { useState, useRef } from "react";
import { Container } from "./styles";
import SliderItem from "./slideritem";
import { Family, Name } from "./slideritem/styles";
export default function TeamSlider({ teamMembers }) {
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
      console.log("hi")
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
    <Container
      ref={divRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
        {teamMembers.map((member, index) => (
          <SliderItem
            index={index}
            currentIndex={currentIndex}
            member={member}
            teamMembers={teamMembers}
          />
        ))}


    </Container>
  );
}
