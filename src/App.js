import React, { useState } from "react";
import { Container } from "./Components/Container";
import Create from "./Create";
import Info from "./Info";
function App() {
  let [messages, setMessage] = useState([]);

  return (
    <Container backgroundColor="white">
      <Create messages={messages} setMessage={setMessage}></Create>
      <Info messages={messages} setMessage={setMessage}></Info>
    </Container>
  );
}
export default App;
