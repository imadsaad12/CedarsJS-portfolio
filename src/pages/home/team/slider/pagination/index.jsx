import React from "react";
import { Container, Item } from "./styles";
export default function Pagination({ teamMembers, currentIndex }) {
  return (
    <Container>
      {teamMembers.map((member,index) => (
        <Item index={index} currentIndex={currentIndex}/>
      ))}
    </Container>
  );
}
