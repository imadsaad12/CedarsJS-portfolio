import React, { useState } from "react";
import { Carousel, CarouselContainer} from "./styles";
import Card from "./card"
export default function Slider({ teamMembers }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleleft = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleright = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };



  return (
    <Carousel>
      <button
        onClick={handleleft}
        style={{ position: "absolute", zIndex: 9, left: "20px" }}
      >
        left
      </button>
      <button
        onClick={handleright}
        style={{ position: "absolute", zIndex: 9, left: "50px" }}
      >
        right
      </button>
      <CarouselContainer>
        {teamMembers.map((member, index) => (
          <Card index={index} currentIndex={currentIndex} member={member} teamMembers={teamMembers} />
        ))}
      </CarouselContainer>
    </Carousel>
  );
}
