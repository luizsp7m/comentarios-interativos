import React from "react";
import { FaReply } from "react-icons/fa";

import { BotaoResposta } from "./styles";

const BotaoReply = () => {
  return (
    <BotaoResposta onClick={() => alert("oi")}>
      <FaReply />
      {" Reply "}
    </BotaoResposta>
  );
};

export default BotaoReply;
