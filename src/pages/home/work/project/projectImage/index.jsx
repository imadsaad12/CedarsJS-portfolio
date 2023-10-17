import React from "react";
import { ImageContainer, Image, ImageWrapper, Layer } from "./styles";
import useBreakpoint from "../../../../../utils/useMediaQuery";
import theme from "../../../../../styles/theme";

export default function ProjectImage({ src }) {
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);
  return (
    <ImageContainer isSmallScreen={isSmallScreen}>
      <Layer></Layer>
      <ImageWrapper>
        <Image src={src} />
      </ImageWrapper>
    </ImageContainer>
  );
}
