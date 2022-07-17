import React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {
    const [likes, setLikes] = useState(0)
    const [text, setText] = useState("Text")
    function change_likes(action) {
        switch(action) {
            case "+":
                setLikes(likes + 1);
                return
            case "-":
                setLikes(likes - 1);
                return
            default:
                console.log('none action');
        }
    }
  return (
    <div className="App">
        <h1>{likes}</h1>
        <button onClick={() => change_likes("+")}>+</button>
        <button onClick={() => change_likes("-")}>-</button>
        <h1>{text}</h1>
        <input onChange={event => setText(event.target.value)} value={text}></input>
        <Counter />
    </div>
  );
}

export default App;
