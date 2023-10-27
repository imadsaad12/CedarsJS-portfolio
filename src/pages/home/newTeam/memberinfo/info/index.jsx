import React from "react";
import { Container, Code, CodeContainer ,Nav,Circle} from "./styles";

export default function Info() {
  let word1 = `<div>`;
  let word3 = `  <name>`;
  let word2 = `Hadi Saab`;
  let word4 = `</name>`;
  let word5 = `  <job>`;
  let word6 = `Software Engineer`;
  let word7 = `</job>`;
  let word8 = `</div>`;

  //     <name>Hadi Saab</name>
  //     <job>Software Developer</job>
  //   </div>

  // `;
  return (
    <Container>
        <Nav>
            <Circle color={"#ff6055"}/>
            <Circle  color={"#F4BF24"}/>
            <Circle  color={"#1FCA35"}/>
        </Nav>
      <CodeContainer>
        <Code colored={true}>{word1}</Code>
      </CodeContainer>

      <CodeContainer>
        <Code colored={true}>{word3}</Code>
        <Code colored={false}>{word2}</Code>
        <Code colored={true}>{word4}</Code>
      </CodeContainer>
      <CodeContainer>
        <Code colored={true}>{word5}</Code>
        <Code colored={false}>{word6}</Code>
        <Code colored={true}>{word7}</Code>
      </CodeContainer>
      <CodeContainer>
        <Code colored={true}>{word8}</Code>
      </CodeContainer>
    </Container>
  );
}
