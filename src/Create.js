import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Create = ({ messages, setMessage }) => {
  let [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setMessage([...messages, { input, id: uuidv4() }]);
    setInput("");
  };
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form>
      <input onChange={inputHandler} value={input} type="text" />
      <button onClick={submitHandler}>Submit</button>
    </form>
  );
};

export default Create;
