import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-3">
      <img
        src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        alt="user"
        className="h-8 w-8 mr-1"
      />
      <span className="font-bold mr-1">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
