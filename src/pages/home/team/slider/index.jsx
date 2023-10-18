import React, { useState } from "react";
import { Carousel, CarouselContainer, Card,Image } from "./styles";
import hadi from "../../../../static/hadi.jpg";

export default function Slider({ teamMembers }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Carousel>
      <CarouselContainer>
        {teamMembers.map((member, index) => (
          <Card style={{transform: `translateX(${(index) * 20}%)`,zIndex:teamMembers.length-index}}>
            <Image src={hadi}/>
          </Card>
        ))}
      </CarouselContainer>
    </Carousel>
  );
}
