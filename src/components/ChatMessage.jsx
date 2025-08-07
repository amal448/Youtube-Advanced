import React from 'react';

const ChatMessage = ({ name, msg }) => {
  return (
    <div className="w-full px-4 py-2 flex items-start gap-2">
      <img
        className="w-9 h-9 rounded-full shrink-0"
        src="https://tse1.mm.bing.net/th/id/OIP.srNFFzORAaERcWvhwgPzVAHaHa?pid=Api&P=0&h=180"
        alt=""
      />
      <div className="bg-gray-100 px-3 py-2 rounded-lg w-full">
        <span className="block font-bold">{name}</span>
        <span className="block whitespace-pre-wrap break-words">{msg}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
