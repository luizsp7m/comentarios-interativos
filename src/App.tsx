import styled from "styled-components";
import { Comment } from "./components/Comment";
import { InputComment } from "./components/Form";
import { useComment } from "./contexts/CommentContext";

export default function App() {
  const { comments } = useComment();

  return (
    <Container>
      <Comments>
        {comments.map(comment => (
          <div key={comment.id}>
            <div className="comment">
              <Comment
                id={comment.id}
                content={comment.content}
                createdAt={comment.createdAt}
                score={comment.score}
                user={comment.user}
              />
            </div>

            {comment.replies.length > 0 && (
              <Replies>
                {comment.replies.map(reply => (
                  <Comment
                    key={reply.id}
                    id={reply.id}
                    content={reply.content}
                    createdAt={reply.createdAt}
                    score={reply.score}
                    user={reply.user}
                    replyingTo={{
                      commentId: comment.id,
                      username: reply.replyingTo,
                    }}
                  />
                ))}
              </Replies>
            )}
          </div>
        ))}
      </Comments>

      <InputComment />
    </Container>
  );
}

const Container = styled.div` // Container de toda a aplicação
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Comments = styled.div` // Container de todos os comentários
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`

const Replies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 4rem;
  border-left: 1px solid var(--light-gray);
  margin-left: 4rem;
  margin-top: 2rem;
`;