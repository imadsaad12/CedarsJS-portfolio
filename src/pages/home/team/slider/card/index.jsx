import React from "react";
import {
  CardContainer,
  TextContainer,
  Name,
  Work,
  IconsContainer,
  Member,
  Square,
  Face,
  Moon,
  Detector,
  DetectorContainer,
} from "./styles";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import face from "../../../../../static/teammobile/face.png";
import square from "../../../../../static/teammobile/square.png";
import memberimage from "../../../../../static/teammobile/member.png";

export default function Card({ index, currentIndex, member }) {
  const isActive = index == currentIndex;
  return (
    <CardContainer index={index} currentIndex={currentIndex}>
      <Member src={memberimage} />

      {isActive && (
        <>
          <Square src={square} />
          <Face src={face} />
          <DetectorContainer>
            <Detector />
          </DetectorContainer>
          <TextContainer>
            <Name>{member.name}</Name>
            <Work>{member.job}</Work>
            <IconsContainer isActive={isActive}>
              <BsTelephoneFill style={{ color: "white" }} />
              <BsLinkedin style={{ color: "white" }} />
              <SiGmail style={{ color: "white" }} />
            </IconsContainer>
          </TextContainer>
        </>
      )}
    </CardContainer>
  );
}
