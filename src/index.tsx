import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CommentProvider } from './contexts/CommentContext';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <CommentProvider>
      <App />
      <GlobalStyle />
    </CommentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
