import React from "react";
import { Circle, Container, Content, OuterSpinner, SVG, Text } from "./styles";

export default function Experience() {
  return (
    <>
      <OuterSpinner>
        <Content>
          <Text style={{ fontSize: "35px", fontWeight: "bold" }}>2+</Text>
          <p style={{ fontSize: "15px", marginTop: "-25px", color: "white" }}>
            Years
          </p>
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
      {/* <Text>2+ years </Text> */}
    </>
  );
}
