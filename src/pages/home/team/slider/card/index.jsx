import React from "react";
import {
  CardContainer,
  Image,
  TextContainer,
  Name,
  Work,
  IconsContainer,
  ImageContainer,
  Member,
  Square,
  Face,
  Moon
} from "./styles";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import moon from "../../../../../static/teammobile/moon.png"
import face from "../../../../../static/teammobile/face.png"
import square from "../../../../../static/teammobile/square.png"
import memberimage from "../../../../../static/teammobile/member.png"

export default function Card({ index, currentIndex, member }) {
  const isActive = index == currentIndex;
  return (
    <CardContainer index={index} currentIndex={currentIndex}>
      <Member src={memberimage}/>
      <Square src={square}/>
      <Face src={face}/>
      <Moon src={moon}/>
      {/* <ImageContainer>
        <Image src={member.image} isActive={isActive} />
      </ImageContainer> */}
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
