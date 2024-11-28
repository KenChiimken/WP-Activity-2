import React, { useEffect, useState } from 'react';
function Counter() {
const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `You clicked ${count} times`;
    }, [count]);
    
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>

    );
} 

export default Counter