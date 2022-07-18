import React from 'react';
import Counter from "./components/Counter";
import TextState from "./components/TextState";
import Post from "./components/Post";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
        <Post post={{id: 0, title: "Post title", pcontent: "some content"}}/>
        <TextState/>
        <Counter/>
    </div>
  );
}

export default App;
