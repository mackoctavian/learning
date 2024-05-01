import React, { useState } from 'react';


const TextField = () => {
    const [text, setText] = useState("hello")

    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <p>You typed: {text}</p>
            <button onClick={() => setText("hello")}>Reset</button>
        </div>
    )
}

export default TextField