import React, { useState } from 'react';

//In this example, the liked state variable holds a boolean. 
//When you click the input, setLiked updates the liked state variable with whether the browser checkbox input is checked. 
//The liked variable is used to render the text below the checkbox.

const CheckBox = () => {
    const [liked, setLiked] = useState(true)

    return(
        <div>
            <label>
            <input type="checkbox" checked={liked} onChange={() => setLiked(!liked)} />
            I liked this
            </label>
            <p>{liked ? "You liked this" : "You did not like this"}</p>
        </div>
    )
}

export default CheckBox;