import React from "react";
import Message from "./Message";

const Info = ({ messages, setMessage }) => {
  return (
    <div>
      {messages.map((msg) => (
        <Message
          msg={msg}
          messages={messages}
          setMessage={setMessage}
          key={msg.id}
        ></Message>
      ))}
    </div>
  );
};
export default Info;
