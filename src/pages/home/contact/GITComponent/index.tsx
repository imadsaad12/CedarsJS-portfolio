import React from "react";
import {
  Container,
  Title,
  Description,
  Button,
  //   Footer,
  //   GitHub,
} from "./styles.js";

export default function GIT() {
  const handleClick = () => {
    window.location.href = `mailto:cedarsjs@gmail.com`;
  };

  return (
    <Container>
      <Title>Get In Touch</Title>
      <Description>
        We're CedarsJS, a team of passionate developers who are building the
        next generation of web development tools and frameworks. We're always
        open to connecting, whether you have a question, want to say hi, or
        collaborate on a project.
      </Description>
      <Button type="button" onClick={handleClick}>
        Say Hello
      </Button>
    </Container>
  );
}
