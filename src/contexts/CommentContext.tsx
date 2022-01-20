import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

import data from "../data.json";

export interface User {
  username: string;
  image: {
    png: string;
    webp: string;
  }
}

interface Reply {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo: string;
}

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

interface CommentProviderProps {
  children: ReactNode;
}

interface CommentContextData {
  currentUser: User;
  comments: Comment[];
  createComment: (comment: CreateCommentProps) => void;
  createReply: (reply: CreateReplyProps) => void;
  updateComment: ({ content, commentId, replyingTo, closeInputUpdate }: UpdateCommentProps) => void;
  deleteComment: ({ commentId, replyingTo }: DeleteCommentProps) => void;
}

interface CreateCommentProps {
  id: string;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

interface CreateReplyProps {
  reply: Reply;
  commentId: string;
}

interface UpdateCommentProps {
  content: string;
  commentId: string;
  replyingTo?: {
    username: string;
    commentId: string;
  };
  closeInputUpdate: () => void;
}

interface DeleteCommentProps {
  commentId: string;
  replyingTo?: {
    username: string;
    commentId: string;
  };
}

const CommentContext = createContext({} as CommentContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const { currentUser } = data;

  const [comments, setComments] = useState<Comment[]>(data.comments);

  async function createComment(comment: CreateCommentProps) {
    const updateComments = [...comments];
    updateComments.push(comment);
    setComments(updateComments);
  }

  async function createReply({ reply, commentId }: CreateReplyProps) {
    const updateComments = [...comments];
    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments[commentIndex].replies.push(reply);
    setComments(updateComments);
  }

  async function updateComment({ content, commentId, replyingTo, closeInputUpdate }: UpdateCommentProps) {
    const updateComments = [...comments];

    if (!replyingTo) { // Comentário
      const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
      updateComments[commentIndex].content = content;
    } else { // Resposta
      const comment = updateComments.findIndex(comment => comment.id === replyingTo.commentId);
      const commentIndex = updateComments[comment].replies.findIndex(comment => comment.id === commentId);
      updateComments[comment].replies[commentIndex].content = content;
    }

    setComments(updateComments);
    closeInputUpdate();
  }

  async function deleteComment({ commentId, replyingTo }: DeleteCommentProps) {
    const updateComments = [...comments];

    if(!replyingTo) {
      const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
      updateComments.splice(commentIndex, 1);
    } else {
      const comment = updateComments.findIndex(comment => comment.id === replyingTo.commentId);
      const commentIndex = updateComments[comment].replies.findIndex(comment => comment.id === commentId);
      updateComments[comment].replies.splice(commentIndex, 1);
    }

    setComments(updateComments);
  };

  return (
    <CommentContext.Provider value={{
      currentUser, comments, createComment, createReply, updateComment, deleteComment
    }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}