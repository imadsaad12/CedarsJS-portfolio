import { Container, Number, Text } from "./styles";
import { Link } from "react-scroll";
interface Props {
  name: string;
  number: string;
  link: string;
}

export default function MenuItem({ name, number, link }: Props) {
  return (
    <Link to={link} smooth duration={500}>
      <Container>
        <Number>{number}</Number>
        <Text>{name}</Text>
      </Container>
    </Link>
  );
}
