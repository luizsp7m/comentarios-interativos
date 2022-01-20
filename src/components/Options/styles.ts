import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  div {
    display: flex;
    align-items: center;
    font-weight: 400;
    gap: .75rem;
    cursor: pointer;
    
    &:hover {
      opacity: 0.75;
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 0;
    }

    span.delete {
      color: var(--soft-red);
    }

    span.edit {
      color: var(--moderate-blue);
    } 
  }
`