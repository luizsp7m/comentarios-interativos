import { ReplyButton } from "../ReplyButton";
import { Counter } from "../Counter";
import { Container, CommentWrapper, CommentHeader, CommentBody } from "./styles";
import { useComment, User } from "../../contexts/CommentContext";
import { formatDistanceToNowStrict } from "date-fns";
import { Options } from "../Options";
import { InputComment } from "../InputComment";
import { useState } from "react";

interface CommentProps {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: {
    username?: string;
    commentId: string;
  }
}

export function Comment({ id, content, createdAt, score, user, replyingTo }: CommentProps) {
  const { currentUser } = useComment();

  const [showInputComment, setShowInputComment] = useState(false);

  function replyButtonOnClick() { // Abrir ou fechar o Input comment
    setShowInputComment(!showInputComment);
  }

  const dateFormatted = formatDistanceToNowStrict(new Date(`${createdAt}`), {});

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

            {user.username === currentUser.username ? <Options /> : <ReplyButton replyButtonOnClick={replyButtonOnClick} />}
          </CommentHeader>

          <CommentBody>
            {replyingTo && <b>@{replyingTo.username}</b>} {content}
          </CommentBody>
        </CommentWrapper>
      </Container>

      { /* Para criar uma resposta devemos passar o nome para quem estamos */}
      { /* respondendo e o ID do comentário para saber onde inserir a resposta */}
      { /* Caso seja uma resposta para uma resposta, devemos passar o nome e o ID do comentário pai */}

      {showInputComment && <InputComment
        context="Reply"
        replyingTo={{
          username: user.username,
          commentId: replyingTo ? replyingTo.commentId : id, // Se tem replyingTo é uma resposta, se não tem, é um comentário
        }}
      />}
    </>
  );
};
