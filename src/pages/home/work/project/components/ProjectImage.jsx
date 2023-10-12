import React from "react";
import { ImageContainer, Image, ImageWrapper, Layer } from "../styles";
import ramadanjuice from "../../../../../static/ramadanjuice.png";

export default function ProjectImage() {
  return (
    <ImageContainer>
      <Layer></Layer>
      <ImageWrapper>
        <Image src={ramadanjuice} />
      </ImageWrapper>
    </ImageContainer>
  );
}
