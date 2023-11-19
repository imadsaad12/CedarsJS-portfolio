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

export default function Card({ index, currentIndex, member }) {
  const isActive = index === currentIndex;
  const handleClickEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const handleClickPhone = (phone) => {
    window.location.href = `tel:${phone}`;
  };
  const handleClickLinkedIn = (url) => {
    window.location.href = url;
  };
  return (
    <CardContainer index={index} currentIndex={currentIndex}>
      <Member src={member.image} />

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
              <BsTelephoneFill
                style={{ color: "white" }}
                onClick={() => handleClickPhone(member.phoneNumber)}
              />
              <BsLinkedin
                style={{ color: "white" }}
                onClick={() => handleClickLinkedIn(member.linkedInURL)}
              />
              <SiGmail
                style={{ color: "white" }}
                onClick={() => handleClickEmail(member.email)}
              />
            </IconsContainer>
          </TextContainer>
        </>
      )}
    </CardContainer>
  );
}
