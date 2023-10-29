import React from "react";
import { Container, Icon, Circle,Light, Fade,FullStack,Web } from "./style";
import Stars from "../../../styles/reusable/Stars";

export default function Skills() {
  return (
    <Container>
        <Fade/>
        <FullStack>Full Stack</FullStack>
        <Web>Web Developers</Web>
        <Stars left={"0"} top={"0"} width={"50%"} height={"50%"} />
        <Stars left={"0"} bottom={"0"}  width={"50%"} height={"50%"}  />
        <Stars right={"0"} top={"0"} width={"50%"} height={"50%"} />
        <Stars right={"0"} bottom={"0"}  width={"50%"} height={"50%"}  />
        <Light/>
      {[0, 1, 2, 3, 4, 5, 6].map((circle,index) => {
        return(
        <Circle radius={`${80*index}px`} index={index+3}>
          <Icon />
        </Circle>
        )
      })}
    </Container>
  );
}
