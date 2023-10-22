import React from "react";
import { CardContainer, Image, TextContainer,Name,Work } from "./styles";
export default function Card({ index, currentIndex, member, teamMembers }) {
  const getstyle = (index) => {
    const styles = {
      transform: "translateX(0)",
      height: "100%",
      zIndex: 10,

      opacity: 1,
      filter: "blur(0px)",
    };

    if (index < currentIndex) {
      styles.transform = `translateX(${(index - currentIndex) * 105}%)`;
      styles.height = "80%";
      styles.filter = "blur(0px)";
      styles.zIndex = teamMembers.length - index;
    } else if (index > currentIndex) {
      styles.transform = `translateX(${(index - currentIndex) * 105}%)`;
      styles.height = "80%";
      styles.zIndex = teamMembers.length - index;
      styles.filter = "blur(0px)";
    }

    return styles;
  };
  return (
    <CardContainer style={getstyle(index)}>
        <TextContainer>
          <Name>{member.name}</Name>
          <Work>{member.job}</Work>
        </TextContainer>
        <Image src={member.image} />
    </CardContainer>
  );
}
