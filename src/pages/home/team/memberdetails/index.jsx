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

export default function MemberDetails() {
  return (
    <Container>
      {/* <BorderBox/> */}
      {/* <TextContainer>
      <Text>Hadi Saab </Text>
        <Text>Full Stack Web Developer</Text>
      </TextContainer> */}
      <ImageContainer>
        <ColorLayer />
        <UpperLayer />
        <BottomLayer />
        <ImageWrapper>
          <Image src={hadi} />
        </ImageWrapper>
      </ImageContainer>
    </Container>
  );
}
