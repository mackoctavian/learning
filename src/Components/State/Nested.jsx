import React, { useState } from 'react';

const Nested = () => {
    const [person, setPerson] = useState({
        name: "Mack Octavian",
        artwork: {
            title: "Blue Nana",
            city: "Dar es salaam",
        }
    })

    return(
        <div className='m-5'>
            <input type="text" value={person.name} className='mx-5'/>
            <input type="text" value={person.artwork.city} onChange={(e) => {
                setPerson({...person, artwork:{...person.artwork, city: e.target.value}})
            }}/>
            <p>{person.name} {person.artwork.city}</p>
        </div>
    )
}

export default Nested