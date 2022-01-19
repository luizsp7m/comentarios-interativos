import React from "react";
import BotaoReply from "../BotaoReply";

import Contador from "../Contador";
import {
  Imagem,
  Wrapper,
  Texto,
  Container,
  WrapperImagem,
  TextoComentario,
} from "./styles";

const dados = {
  data: "2 months ago",
  texto:
    "Impressive! Though it seems the drag feature could be improved But overall it looks incredible. You've nailed the design and theresponsiveness at various breakpoints works really well.",
};

type ComentarioProps = {
  image: string;
};

const Comentario = ({ image }: ComentarioProps) => {
  return (
    <Container>
      <Wrapper>
        <div
          style={{
            display: "flex",
          }}
        >
          <Contador />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                minWidth: "550px",
              }}
            >
              <WrapperImagem>
                <Imagem src={image} alt="texto" />
              </WrapperImagem>
              <p>
                <strong>amyrobson</strong>
              </p>
              <Texto>{dados.data}</Texto>
            </div>
            <BotaoReply />
            <TextoComentario>{dados.texto}</TextoComentario>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Comentario;
