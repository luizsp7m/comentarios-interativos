import { Container } from "./styles";

export function Options() {
  return (
    <Container>
      <div>
        <img src="/assets/images/icon-delete.svg" alt="Delete" />
        <span className="delete">Delete</span>
      </div>

      <div>
        <img src="/assets/images/icon-edit.svg" alt="Edit" />
        <span className="edit">Edit</span>
      </div>
    </Container>
  );
}