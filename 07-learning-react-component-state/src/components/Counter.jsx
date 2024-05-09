import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>
            <p>Count is {count}.</p>
        </>
    )
}

export default Counter;