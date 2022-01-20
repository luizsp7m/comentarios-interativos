import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  gap: 1rem;
  font-size: 1.6rem;
  color: hsl(238, 40%, 52%);

  &:hover {
    color: hsl(211, 10%, 45%);
  }
`;
