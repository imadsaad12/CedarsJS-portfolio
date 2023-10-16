import { Container, Number, Text } from "./styles";
import { Link } from "react-scroll";
interface Props {
  name: string;
  number: string;
  link: string;
  isSideBar?: boolean;
  onClick?: Function;
}

export default function MenuItem({
  name, 
  number,
  link,
  isSideBar = false,
  onClick = () => {},
}: Props) {
  return (
    <Link to={link} smooth duration={1000} offset={-100}>
      <Container
        isSideBar={isSideBar}
        onClick={() => {
          onClick();
        }}
      >
        <Number isSideBar={isSideBar}>{number}</Number>
        <Text>{name}</Text>
      </Container>
    </Link>
  );
}
