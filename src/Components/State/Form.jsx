import React, { useState } from 'react';

const Form = () => {
    const [person, setPerson] = useState({firstname: "Mack", lastname: "Octavian", email:"maestrooctavian@gmail.com"})
    

    return(
        <div>
            <input type="text" onChange={(e) => setPerson({...person, firstname: e.target.value})} value={person.firstname}/>
            <input type="text" onChange={(e) => setPerson({...person, lastname: e.target.value})} value={person.lastname}/>
            <input type="text" onChange={(e) => setPerson({...person, email:e.target.value})} value={person.email}/>
            <p>{person.firstname} {person.lastname} {person.email}</p>
        </div>
    )
}

export default Form;