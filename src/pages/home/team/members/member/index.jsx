import React from "react";
import hadi from "../../../../../static/hadi.jpg";
import { Container, Image, ImageWrapper } from "./styles";
export default function Member() {
  return (
    <Container>
      <ImageWrapper>
        <Image src={hadi} />
      </ImageWrapper>
    </Container>
  );
}
