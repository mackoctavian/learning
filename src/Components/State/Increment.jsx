import React, { useState } from 'react';

//This example passes the updater function, so the “+3” button works.
const Increment = () => {
    const [age, setAge] = useState(46)
    const handleClick = () => {
        setAge(a => a + 1)
    }
    return(
        
        <div>
            <h2>Your age: {age}</h2>
            <div><button className='ring-1 ring-slate-200 rounded-sm p-2 m-2' onClick={() => {
                handleClick()
                handleClick()
                handleClick()
            }}>+3</button></div>
            <div><button className='ring-1 ring-slate-200 rounded-sm p-2 m-2' onClick={() => {handleClick()}}>+1</button></div>
        </div>
    )
}

export default Increment;