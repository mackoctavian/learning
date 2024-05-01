import React, { useState } from 'react';

//The count state variable holds a number. Clicking the button increments it
const Counter = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)} className='ring-1 ring-slate-200 rounded-md p-2 m-5'>You pressed me {count} times</button>
        </div>
    )
}

export default Counter;