import React from "react";
import {
  BottomLayer,
  Container,
  ImageWrapper,
  UpperLayer,
  Image,
  ColorLayer,
  ImageContainer,
  JobText,
  TextContainer,
  NameText,
  LinkedInContainer,
  GmailContainer,
} from "./styles";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import hadi from "../../../../static/hadi.jpg"
export default function MemberDetails({ teamMembers }) {
  const activemember = teamMembers.find((member) => member.isClicked);
  const { upperHeight, bottomHeight, name, job, image } = activemember;

  return (
    <Container>
      <TextContainer>
        <LinkedInContainer>
          <FaLinkedin size={15} />
        </LinkedInContainer>
        <GmailContainer>
          <SiGmail size={15} />
        </GmailContainer>
        <UpperLayer upperHeight={upperHeight} id="upperlayer" />
        <BottomLayer bottomHeight={bottomHeight} id="bottomlayer" />
        <NameText>{name}</NameText>
        <JobText>{job}</JobText>
      </TextContainer>
      <ImageContainer>
        <ColorLayer />
        <UpperLayer upperHeight={upperHeight} id="upperlayer" />
        <BottomLayer bottomHeight={bottomHeight} id="bottomlayer" />
        <ImageWrapper>
          <Image src={hadi} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
}
