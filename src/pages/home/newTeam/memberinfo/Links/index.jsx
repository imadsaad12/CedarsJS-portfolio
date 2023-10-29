import React from "react";
import { Container, Link, Text, Icon } from "./styles";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";

export default function Links({ email, phoneNumber, linkedIn }) {
  return (
    <Container>
      <Link>
        <SiGmail style={Icon} />
        <Text style={{ fontSize: "10px" }}>{email}</Text>
      </Link>
      <Link>
        <BsTelephoneFill style={Icon} />
        <Text>{phoneNumber}</Text>
      </Link>
      <Link>
        <BsLinkedin style={Icon} />
        <Text>{linkedIn}</Text>
      </Link>
    </Container>
  );
}
