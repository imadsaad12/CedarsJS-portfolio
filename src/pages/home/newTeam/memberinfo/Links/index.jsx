import React from "react";
import { Container, Link, Text, Icon } from "./styles";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";

export default function Links() {
  return (
    <Container>
      <Link>
        <SiGmail style={Icon} />
        <Text>saabhadi285@gmail.com</Text>
      </Link>
      <Link>
        <BsTelephoneFill style={Icon} />
        <Text>+96171112521</Text>
      </Link>
      <Link>
        <BsLinkedin style={Icon} />
        <Text>Imad Saad</Text>
      </Link>
    </Container>
  );
}
