import { useComment } from "../../contexts/CommentContext";
import { Container } from "./styles";

interface OptionsProps {
  toggleInputUpdate: () => void;
  commentId: string;
  replyingTo?: {
    username: string;
    commentId: string;
  };
}

export function Options({ toggleInputUpdate, commentId, replyingTo }: OptionsProps) {
  const { deleteComment } = useComment();

  function onDeleteComment() {
    if (window.confirm("Are you sure?")) {
      deleteComment({ commentId, replyingTo });
    } else return;
  }

  return (
    <Container>
      <div onClick={onDeleteComment}>
        <img src="/assets/images/icon-delete.svg" alt="Delete" />
        <span className="delete">Delete</span>
      </div>

      <div onClick={toggleInputUpdate}>
        <img src="/assets/images/icon-edit.svg" alt="Edit" />
        <span className="edit">Edit</span>
      </div>
    </Container>
  );
}