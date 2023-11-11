import React from "react";
import {
  Container,
  Icon,
  Circle,
  Light,
  Fade,
  FullStack,
  Web,
  Javascript,
} from "./style";
import Stars from "../../../styles/reusable/Stars";
import js from "../../../static/js.png";
import html from "../../../static/html.png";
import css from "../../../static/css.png";
import nodejs from "../../../static/nodejs.png";
import react from "../../../static/react.png";
import Comet from "../../../styles/reusable/Comet";
import Star from "../../../styles/reusable/Star";
import useBreakpoint from "../../../utils/useMediaQuery";
import theme from "../../../styles/theme";

export default function Skills() {
  const isSmallScreen = useBreakpoint(theme.breakingPoints.sm);
  const radius = isSmallScreen ? 60 : 90;
  const planets = [html, css, nodejs, react, html];

  return (
    <Container>
      <Comet top={"10%"} right={"10%"} />
      <Comet top={"40%"} right={"20%"} />
      <Comet top={"10%"} right={"70%"} />
      <Comet top={"80%"} right={"74%"} />
      <Star left={"10%"} top={"10%"} blur={"2px"} />
      <Star left={"55%"} top={"5%"} blur={"0px"} />
      <Star left={"50%"} top={"40%"} blur={"2px"} />
      <Star left={"80%"} top={"10%"} blur={"2px"} />
      <Stars left={"0"} top={"0"} width={"50%"} height={"50%"} />
      <Stars left={"0"} bottom={"0"} width={"50%"} height={"50%"} />
      <Stars right={"0"} top={"0"} width={"50%"} height={"50%"} />
      <Stars right={"0"} bottom={"0"} width={"50%"} height={"50%"} />
      {/* <Fade /> */}
      <Javascript src={js} />
      <FullStack>Full Stack</FullStack>
      <Web>Web Developers</Web>
      {/* <Light /> */}
      {planets.map((icon, index) => {
        return (
          <Circle radius={`${radius * (index + 2)}px`} index={index + 3}>
            <Icon src={icon} isSmallScreen={isSmallScreen} />
          </Circle>
        );
      })}
    </Container>
  );
}
