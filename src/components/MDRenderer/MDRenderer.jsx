import React from 'react';
import ReactMarkdown from 'react-markdown';

const MDRenderer = ({ markdownContent }) => {
  
  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MDRenderer;
