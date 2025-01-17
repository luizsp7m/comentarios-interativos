import styled from "styled-components";

export const Container = styled.form`
  background: var(--white);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid var(--very-light);

  display: flex;
  gap: 2rem;
  align-items: flex-start;

  > img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  > textarea {
    resize: none;
    outline: 0;
    flex: 1;
    padding: 1.6rem;
    color: var(--dark-blue);
    border-radius: 0.75rem;
    border: 1px solid var(--light-gray);
    font-size: 1.6rem;
    line-height: 2.6rem;
    transition: border-color 0.25s ease-in-out;
    cursor: pointer;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &:focus {
      border-color: var(--light-grayish-blue);
    }
  }

  > button {
    background: var(--moderate-blue);
    color: var(--white);
    text-transform: uppercase;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.5rem;
    transition: opacity 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`