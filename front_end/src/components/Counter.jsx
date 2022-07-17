import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    function change_count(action) {
        switch(action) {
            case "+":
                setCount(count + 1);
                return
            case "-":
                setCount(count - 1);
                return
            default:
                console.log('none action');
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => change_count("+")}>+</button>
            <button onClick={() => change_count("-")}>-</button>
        </div>
    );
};

export default Counter;