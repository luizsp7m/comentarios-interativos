import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Wrapper = styled.div`
display: flex;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: hsl(0, 0%, 100%);
  height: 170px;
  width: 50%;
  text-align: center;
  padding: 24px;
  margin: 24px;
`;

export const WrapperImagem = styled.div`
  display: flex;
  padding: 0 18px;
  flex-direction: flex-start;
`;

export const Imagem = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const DivWrapper = styled.div`
  display: flex,
  flex-direction: row,

`;

export const Texto = styled.p`
  color: hsl(211, 10%, 45%);
  padding: 0 18px;
  text-align: justify;
`;
export const TextoComentario = styled.p`
  color: hsl(211, 10%, 45%);
  margin-top: 30px;
  padding: 0 18px;
  justify-content: end;

  text-align: justify;
`;
