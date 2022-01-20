import { FaReply } from "react-icons/fa";
import { Container } from "./styles";

interface ReplyButtonProps {
  replyButtonOnClick: () => void;
}

export const ReplyButton = ({ replyButtonOnClick }: ReplyButtonProps) => {
  return (
    <Container onClick={replyButtonOnClick}>
      <FaReply /> {" Reply "}
    </Container>
  );
};
