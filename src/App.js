import React, { useState } from "react";
// import { Button } from "./Components/ButtonStyle";
import { Container } from "./Components/Container";
// import { Friends } from "./Friend";
import Create from "./Create";
import Info from "./Info";

function App() {
  // let [name, setName] = useState("JackDai");

  // const buttonHandler = (e) => {
  //   e.preventDefault();
  //   let date = new Date().toLocaleDateString();
  //   alert(date);
  // };
  // let friends = [
  //   { name: "Jack", age: 25, desc: "I'm Younger" },
  //   { name: "Mary", age: 60, desc: "I'm Elder" },
  //   { name: "Lee", age: 4, desc: "I'm Children" },
  // ];

  // let [msgs, setMsgs] = useState([]);
  // const setMsgsHandler = (e) => {
  //   e.preventDefault();
  //   setMsgs([...msgs, input]);
  //   setInput("");
  // };

  // let [input, setInput] = useState("");
  // const setInputsHandler = (e) => {
  //   // console.log(e.target.value);
  //   setInput(e.target.value);
  // };

  let [messages, setMessage] = useState([]);

  return (
    <Container backgroundColor="white">
      <Create messages={messages} setMessage={setMessage}></Create>
      <Info messages={messages} setMessage={setMessage}></Info>

      {/* <Button backgroundColor="red">Click this Button</Button>
      <p>My Friend are:</p>
      {friends.map((friend) => (
        <Friends
          name={friend.name}
          age={friend.age}
          desc={friend.desc}
        ></Friends>
      ))}
      <form>
        <input type="text" />
        <button onClick={buttonHandler}>Submit</button>
      </form>
      <p></p>
 */}

      {/* <form>
        <input onChange={setInputsHandler} value={input} type="text" />
        <button onClick={setMsgsHandler}> Submit</button>
      </form> */}
    </Container>
  );
}
export default App;
