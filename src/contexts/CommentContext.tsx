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
  replyingTo?: string;
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
  createComment: (newComment: CreateCommentProps) => void;
  createReply: (newReply: CreateReplyProps) => void;
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
  reply: {
    id: string;
    content: string;
    createdAt: string;
    score: number;
    user: User;
    replyingTo?: string;
  };
  commentId?: string;
}

const CommentContext = createContext({} as CommentContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const { currentUser } = data;

  const [comments, setComments] = useState<Comment[]>(data.comments);

  async function createComment(newComment: CreateCommentProps) {
    const updateComments = [...comments];
    updateComments.push(newComment);
    setComments(updateComments);
  }

  async function createReply({ reply, commentId }: CreateReplyProps) {
    const updateComments = [...comments];
    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments[commentIndex].replies.push(reply);
    setComments(updateComments);
  }

  return (
    <CommentContext.Provider value={{
      currentUser, comments, createComment, createReply
    }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}