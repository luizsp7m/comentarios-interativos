import { FaReply } from "react-icons/fa";
import { Container } from "./styles";

interface ReplyButtonProps {
  toggleShowInputComment: () => void;
}

export const ReplyButton = ({ toggleShowInputComment }: ReplyButtonProps) => {
  return (
    <Container onClick={toggleShowInputComment}>
      <FaReply /> {" Reply "}
    </Container>
  );
};
