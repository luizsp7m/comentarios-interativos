import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button, h5 {
    width: 4rem;
    height: 4rem;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--moderate-blue);
    font-weight: 500;
    font-size: 1.6rem;

    background: var(--very-light);
    cursor: pointer;
  }

  h5 {
    cursor: default;
  }
`;