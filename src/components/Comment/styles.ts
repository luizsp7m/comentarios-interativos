import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  padding: 20px;
  border-radius: 7px;
  border: 1px solid var(--very-light);
  display: flex;
  align-items: flex-start;
  gap: 40px;
`

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    > img {
      height: 40px;
      width: 40px;
      object-fit: cover;
      border-radius: 50%;
    }

    > span {
      font-size: 16px;
      font-weight: 500;
      color: var(--dark-blue);
    }

    > h6 {
      color: var(--white);
      background: var(--moderate-blue);
      padding: 0.25rem 0.65rem;
      border-radius: 0.25rem;
      font-size: 1.4rem;
      font-weight: normal;
    }

    > time {
      font-size: 14px;
      color: var(--grayish-blue);
    }
  }
`

export const CommentBody = styled.div`
  > p {
    color: var(--grayish-blue);
    font-size: 16px;
    line-height: 24px;

    > b {
      color: var(--moderate-blue);
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;

    > textarea {
      width: 100%;
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
  }
`
