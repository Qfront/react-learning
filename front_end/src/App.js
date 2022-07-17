import React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {
    const [text, setText] = useState("Text")
  return (
    <div className="App">
        <h1>{text}</h1>
        <input onChange={event => setText(event.target.value)} value={text}></input>
        <Counter/>
    </div>
  );
}

export default App;
