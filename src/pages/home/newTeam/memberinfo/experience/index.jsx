import React from "react";
import { Circle, Content, OuterSpinner, SVG, Text, Years } from "./styles";

export default function Experience({ experience }) {
  return (
    <>
      <OuterSpinner>
        <Content>
          <Text>{experience}</Text>
          <Years>Years</Years>
        </Content>
        <SVG width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#368dc5" />
              <stop offset="100%" stop-color="#0ec3cc" />
            </linearGradient>
          </defs>
          <Circle
            id="circle"
            r="80"
            cy="100"
            cx="100"
            stroke-width="13"
            stroke="#fff"
            fill="url(#gradient)"
          />
        </SVG>
      </OuterSpinner>
    </>
  );
}
