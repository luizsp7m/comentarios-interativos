import { ReplyButton } from "../ReplyButton";
import { Counter } from "../Counter";
import { Container, CommentWrapper, CommentHeader, CommentBody } from "./styles";
import { useComment, User } from "../../contexts/CommentContext";
import { formatDistanceToNowStrict } from "date-fns";
import { Options } from "../Options";
import { InputReply } from "../Form";
import { FormEvent, useState } from "react";

interface CommentProps {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: {
    username: string;
    commentId: string;
  }
}

export function Comment({ id, content, createdAt, score, user, replyingTo }: CommentProps) {
  const { currentUser, updateComment } = useComment();

  const [showInputComment, setShowInputComment] = useState(false);
  const [showInputUpdate, setShowInputUpdate] = useState(false);
  const [contentInput, setContentInput] = useState(content);

  function toggleShowInputComment() { // Abrir ou fechar o Input comment
    setShowInputComment(!showInputComment);
  }

  function toggleInputUpdate() {
    setShowInputUpdate(!showInputUpdate);
  }

  function closeInputUpdate() {
    setShowInputUpdate(!showInputUpdate);
  }

  function closeInputReply() { // Fechar input comment depois que enviar uma resposta
    setShowInputComment(false);
  }

  function onUpdateComment(event: FormEvent) {
    event.preventDefault();

    updateComment({
      content: contentInput, commentId: id, replyingTo, closeInputUpdate
    });
  }

  const dateFormatted = formatDistanceToNowStrict(new Date(`${createdAt}`), {}); // Formatação de quanto tempo atrás

  return (
    <>
      <Container>
        <Counter score={score} />

        <CommentWrapper>
          <CommentHeader>
            <div>
              <img src={user.image.png} alt={user.username} />
              <span>{user.username}</span>
              {user.username === currentUser.username && <h6>you</h6>}
              <time>{dateFormatted} ago</time>
            </div>

            {user.username === currentUser.username ?
              <Options
                toggleInputUpdate={toggleInputUpdate}
                commentId={id}
                replyingTo={replyingTo}
              />
              : <ReplyButton
                toggleShowInputComment={toggleShowInputComment}
              />}
          </CommentHeader>

          <CommentBody>
            {showInputUpdate ? <form onSubmit={onUpdateComment}>
              <textarea
                placeholder="Add a comment..."
                rows={3}
                value={`${contentInput}`}
                onChange={({ target }) => setContentInput(target.value)}
                required={true}
              />
              <button type="submit">Update</button>
            </form> : <p>
              {replyingTo && <b>@{replyingTo.username}</b>} {content}
            </p>}
          </CommentBody>
        </CommentWrapper>
      </Container>

      { /* Para criar uma resposta devemos passar o nome para quem estamos */}
      { /* respondendo e o ID do comentário para saber onde inserir a resposta */}
      { /* Caso seja uma resposta para uma resposta, devemos passar o nome e o ID do comentário pai */}

      {showInputComment && <InputReply
        replyingTo={{
          username: user.username,
          commentId: replyingTo ? replyingTo.commentId : id, // Se tem replyingTo então é uma resposta, se não tem, é um comentário
        }}

        closeInputReply={closeInputReply}
      />}
    </>
  );
};
