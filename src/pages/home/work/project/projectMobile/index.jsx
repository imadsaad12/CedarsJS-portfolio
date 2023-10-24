import React, { useState } from "react";
import { Container } from "./styles";
import Project from "./project";
export default function ProjectMobile() {
    const [activeIndex,setactiveIndex]=useState(0)
  return (
    <Container>
      {[1, 2, 2,].map((project,index) => (
        <Project index={index} activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
      ))}
    </Container>
  );
}
