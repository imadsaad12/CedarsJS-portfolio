import { useEffect, useState } from "react";
import { Container, Logo } from "./styles";
import logoImage from "../../static/logo.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Container>{isLoading ? <Logo src={logoImage} /> : <p>home</p>}</Container>
  );
}
