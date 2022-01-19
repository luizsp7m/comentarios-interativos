import React, { useCallback, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { DivContador, Texto } from "./styles";

const Contador = () => {
  const [contador, setContador] = useState(0);

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
    <DivContador
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <FaPlus color="gray" onClick={handleBotaoMais} cursor='pointer'/>
      <Texto>{contador}</Texto>
      <FaMinus color="gray" onClick={handleBotaMenos} cursor='pointer'/>
    </DivContador>
  );
};

export default Contador;
