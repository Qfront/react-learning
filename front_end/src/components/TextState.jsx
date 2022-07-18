import React, {useState} from 'react';

const TextState = () => {
    const [text, setText] = useState("")
    return (
        <div>
            <p>{text}</p>
            <input onChange={event => setText(event.target.value)}></input>
        </div>
    );
};

export default TextState;