import React from 'react';
import ReactMarkdown from 'react-markdown';

const MDRenderer = ({ markdownContent }) => {
  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MDRenderer;
