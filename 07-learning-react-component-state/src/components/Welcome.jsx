import { useState } from 'react';
const Welcome = () => {

    // State uses the useState hook, which is a function that returns an array with two elements
    // Create a state variable called name and a function to update it called setName
    const [name, setName] = useState('World');

    return (
        <div>
            <span>Enter your name: </span>
            <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}} />
  
            <p>Hello {name}!</p>
        </div>
    )
}

export default Welcome;


