import React, { useEffect, useState } from "react";
import Comentario from "./components/Comentarios";
import Api from "./api";

type Imagens ={
  png: string
  webp: string
}
type UsuarioAtual ={
image:Imagens
userName: string
  
}

const App = () => {
  const [usuarioAtual, setUsuarioAtual] = useState<UsuarioAtual[]>([]);

  useEffect(() => {
    Api.get("/currentUser").then((res) => {
      setUsuarioAtual(res.data);
    });
  }, []);
  
  console.log(usuarioAtual);

  return (
  <>
  {usuarioAtual.map((dadosUsuario, index) =>   
  <Comentario key={index} image={dadosUsuario.image.png}/>)}
  </>)
};

export default App;
