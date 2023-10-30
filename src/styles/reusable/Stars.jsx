import React from "react";
import { StarsImage } from "./styles";
import stars from "../../static/space/stars.png";

export default function Stars({ left, top, right, bottom, width, height }) {
  return (
    <StarsImage
      src={stars}
      styles={{ left, top, right, bottom, width, height }}
    />
  );
}
