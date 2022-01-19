import styled from "styled-components";

export const BotaoResposta = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 25px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  cursor: pointer;
  gap: 10px;

  &:hover {
    color: hsl(211, 10%, 45%);
  }
`;
