import React, { useState } from "react";
import "./style/style.css";

const Message = ({ msg, messages, setMessage }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    // setMessage(messages.filter((m) => m !== msg));
    setMessage(messages.filter((m) => m.id !== msg.id));
  };
  return (
    <div className="msg">
      <p>{msg.input}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Message;
