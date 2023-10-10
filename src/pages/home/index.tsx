import { useEffect, useState } from "react";
import { Container, Logo } from "./styles";
import logoImage from "../../static/logo.png";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Logo src={logoImage} />
      ) : (
        <h1 style={{ color: "white", fontFamily: "MyCustomFont" }}>
          ATMOSPHERIC
        </h1>
      )}
    </Container>
  );
}
