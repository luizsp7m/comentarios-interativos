import { useCallback, useState } from "react";
import { Container } from "./styles";

interface Counter {
  score: number;
}

export const Counter = ({ score }: Counter) => {
  const [contador, setContador] = useState(score);

  const handleBotaoMais = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const handleBotaMenos = useCallback(() => {
    setContador((prevContador) => {
      if (prevContador > 0) {
        return prevContador - 1;
      }
      return prevContador;
    });
  }, []);

  return (
    <Container>
      <button onClick={handleBotaoMais}>
        <img src="/assets/images/icon-plus.svg" alt="Plus" />
      </button>

      <h5>{contador}</h5>

      <button onClick={handleBotaMenos}>
        <img src="/assets/images/icon-minus.svg" alt="Minus" />
      </button>
    </Container>
  );
};
