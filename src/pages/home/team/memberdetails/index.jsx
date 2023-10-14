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
} from "./styles";
import hadi from "../../../../static/hadi.jpg";

export default function MemberDetails({ teamMembers }) {
  const activemember = teamMembers.find((member) => member.isClicked);
  const {upperHeight,bottomHeight,name,job}=activemember


  return (
    <Container>
      {/* <BorderBox/> */}
      {/* <TextContainer>
      <Text>Hadi Saab </Text>
        <Text>Full Stack Web Developer</Text>
      </TextContainer> */}
      <TextContainer>
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
