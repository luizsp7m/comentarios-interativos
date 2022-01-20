import { FormEvent, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { Container } from "./styles";
import { v4 as uuid } from "uuid";

interface InputCommentProps {
  context?: string;
  replyingTo?: {
    username: string;
    commentId: string;
  }
}

export function InputComment({ context = "Send", replyingTo }: InputCommentProps) {
  const { currentUser, createComment, createReply } = useComment();

  const [content, setContent] = useState("");

  function onCreateComment(event: FormEvent) {
    event.preventDefault();

    const comment = {
      id: uuid(),
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replies: [],
    };

    createComment(comment)

    setContent("");
  }

  function onCreateReply(event: FormEvent) {
    event.preventDefault();

    const reply = {
      id: uuid(),
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replyingTo: replyingTo?.username,
    };

    createReply({
      reply, commentId: replyingTo?.commentId
    });

    setContent("");
  }

  return (
    <Container onSubmit={context === "Send" ? onCreateComment : onCreateReply}>
      <img src={currentUser.image.png} alt={currentUser.username} />

      <textarea
        placeholder="Add a comment..."
        rows={3}
        required={true}
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      <button type="submit">{context}</button>
    </Container>
  );
}