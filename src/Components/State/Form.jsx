import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('Taylor')
    const [age, setAge] = useState(42)

    return(
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            <button onClick={() => setAge(age + 1)}>Increment Age</button>
            <p>Hello, {name}. You are {age}.</p>
        </div>
    )
}

export default Form;