import React from "react";
import {
  BottomLayer,
  Container,
  ImageWrapper,
  UpperLayer,
  Image,
  ColorLayer,
  ImageContainer,
  BorderBox,
  TextContainer,
  Text,
} from "./styles";
import hadi from "../../../../static/hadi.jpg";

export default function MemberDetails({teamMembers}) {
  const upperHeight = teamMembers.find(item => item.isClicked === true).upperHeight;
  const bottomHeight = teamMembers.find(item => item.isClicked === true).bottomHeight;

  return (
    <Container>
      {/* <BorderBox/> */}
      {/* <TextContainer>
      <Text>Hadi Saab </Text>
        <Text>Full Stack Web Developer</Text>
      </TextContainer> */}
      <ImageContainer>
        <ColorLayer />
        <UpperLayer upperHeight={upperHeight} id="upperlayer"/>
        <BottomLayer bottomHeight={bottomHeight} id="bottomlayer" />
        <ImageWrapper>
          <Image src={hadi} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
}
