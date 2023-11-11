import React, { useState, useRef } from "react";
import { Carousel, CarouselContainer, Light ,MoonContainer,Moon} from "./styles";
import Card from "./card";
import Pagination from "./pagination";
import Stars from "../../../../styles/reusable/Stars";
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

      if (deltaX > 10) {
        handleright();
      } else if (deltaX < -10) {
        handleleft();
      }

      setStartX(null);
    }
  };

  return (
    <Carousel>
       {/* <Stars top={"0"}  width={"100%"} height={"50%"} />
       <Stars bottom={"0"}  width={"100%"} height={"50%"} /> */}
      {/* <MoonContainer>

      </MoonContainer> */}
      <CarouselContainer
        ref={divRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
              <Moon src={moon} />

        {teamMembers.map((member, index) => (
          <Card
            index={index}
            currentIndex={currentIndex}
            member={member}
          />
        ))}
      </CarouselContainer>
      <Pagination teamMembers={ teamMembers } currentIndex={currentIndex}/>
      {/* <Light/> */}
      
    </Carousel>
  );
}
