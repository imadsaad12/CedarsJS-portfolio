import { Container, Number, Text } from "./styles";

interface Props {
  name: string;
  number: string;
  link?: string;
}

export default function MenuItem({ name, number }: Props) {
  return (
    <Container>
      <Number>{number}</Number>
      <Text>{name}</Text>
    </Container>
  );
}
