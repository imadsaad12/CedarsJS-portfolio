import React from "react";
import { ImageContainer, Image, ImageWrapper, Layer } from "../styles";
import ramadanjuice from "../../../../../static/ramadanjuice.png";
import useBreakpoint from "../../../../../utils/useMediaQuery";
import theme from "../../../../../styles/theme";

export default function ProjectImage() {
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);
  return (
    <ImageContainer isSmallScreen={isSmallScreen}>
      <Layer></Layer>
      <ImageWrapper>
        <Image src={ramadanjuice} />
      </ImageWrapper>
    </ImageContainer>
  );
}
