import React from "react";
import {
  CardContainer,
  Image,
  TextContainer,
  Name,
  Work,
  IconsContainer,
  ImageContainer,
} from "./styles";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Card({ index, currentIndex, member }) {
  const isActive = index == currentIndex;
  return (
    <CardContainer index={index} currentIndex={currentIndex}>
      <ImageContainer>
        <Image src={member.image} isActive={isActive} />
      </ImageContainer>
      <TextContainer>
        <Name>{member.name}</Name>
        <Work>{member.job}</Work>
        <IconsContainer isActive={isActive}>
          <BsTelephoneFill style={{ color: "white" }} />
          <BsLinkedin style={{ color: "white" }} />
          <SiGmail style={{ color: "white" }} />
        </IconsContainer>
      </TextContainer>
    </CardContainer>
  );
}
