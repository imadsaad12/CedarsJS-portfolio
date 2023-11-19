import React from "react";
import { Container, Link, Text, Icon } from "./styles";
import { SiGmail } from "react-icons/si";
import { BsTelephoneFill, BsLinkedin } from "react-icons/bs";

export default function Links({ email, phoneNumber, linkedIn, linkedInURL }) {
  const handleClickEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };
  const handleClickPhone = (phone) => {
    window.location.href = `tel:${phone}`;
  };
  const handleClickLinkedIn = (url) => {
    window.location.href = url;
  };
  return (
    <Container>
      <Link onClick={() => handleClickEmail(email)}>
        <SiGmail style={Icon} />
        <Text style={{ fontSize: "10px" }}>{email}</Text>
      </Link>
      <Link onClick={() => handleClickPhone(phoneNumber)}>
        <BsTelephoneFill style={Icon} />
        <Text>{phoneNumber}</Text>
      </Link>
      <Link onClick={() => handleClickLinkedIn(linkedInURL)}>
        <BsLinkedin style={Icon} />
        <Text>{linkedIn}</Text>
      </Link>
    </Container>
  );
}
