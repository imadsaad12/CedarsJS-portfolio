import React from "react";
import {  CardContainer, Image,ImageWrapper, Layer} from "./styles";

export default function Card({index,currentIndex,member,teamMembers}) {
    const getstyle = (index) => {
        const styles = {
          transform: 'translateX(0)',
          height: '100%',
          zIndex: teamMembers.length - index,
          opacity:1
        };
      
        if (index < currentIndex) {
          styles.transform = `translateX(${(index - currentIndex) * 100}%)`;
        } else if (index === currentIndex + 1) {
          styles.transform = 'translateX(15%)';
          styles.height = '90%';
        } else if (index === currentIndex + 2) {
          styles.transform = 'translateX(22%)';
          styles.height = '70%';
        } else if (index > currentIndex + 2) {
          styles.transform = `translateX(${(index - (currentIndex + 2)) * 130}%)`;
          styles.height = '70%';
          styles.opacity ='0'
        }
      
    
        return styles;
    
    
      };
  return (
    <CardContainer style={getstyle(index)}>
      <Layer />
      <ImageWrapper>
        <Image src={member.image} />
      </ImageWrapper>
    </CardContainer>
  );
}