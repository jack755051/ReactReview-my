import React, { useState } from "react";

const Create = ({ messages, setMessage }) => {
  let [input, setInput] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();
    setMessage([...messages, input]);
    setInput("");
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={sumbitHandler}>Sumbit</button>
    </form>
  );
};

export default Create;
