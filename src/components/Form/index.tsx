import { FormEvent, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { Container } from "./styles";
import { v4 as uuid } from "uuid";

interface InputReplyProps {
  replyingTo: {
    username: string;
    commentId: string;
  };
  closeInputReply: () => void;
}

export function InputComment() {
  const { currentUser, createComment, } = useComment();

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

    createComment(comment);

    setContent("");
  }

  return (
    <Container onSubmit={onCreateComment}>
      <img src={currentUser.image.png} alt={currentUser.username} />

      <textarea
        placeholder="Add a comment..."
        rows={3}
        required={true}
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      <button type="submit">Send</button>
    </Container>
  );
}

export function InputReply({ replyingTo, closeInputReply }: InputReplyProps) {
  const { currentUser, createReply, } = useComment();

  const [content, setContent] = useState("");

  function onCreateReply(event: FormEvent) {
    event.preventDefault();

    const reply = {
      id: uuid(),
      content,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replyingTo: replyingTo.username,
    };

    createReply({ reply, commentId: replyingTo.commentId });

    setContent("");
    closeInputReply();
  }

  return (
    <Container onSubmit={onCreateReply}>
      <img src={currentUser.image.png} alt={currentUser.username} />

      <textarea
        placeholder="Add a comment..."
        rows={3}
        required={true}
        value={content}
        onChange={({ target }) => setContent(target.value)}
      />

      <button type="submit">Reply</button>
    </Container>
  );
}