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
  LinkedIn,
  Gmail,
  LinkedInContainer,
  GmailContainer,
} from "./styles";
import hadi from "../../../../static/hadi.jpg";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function MemberDetails({ teamMembers }) {
  const activemember = teamMembers.find((member) => member.isClicked);
  const { upperHeight, bottomHeight, name, job, src } = activemember;

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
          <Image src={require(`../../../../static/${src}`)} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
}
