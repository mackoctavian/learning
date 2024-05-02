import React, { useState } from 'react';


export default function Counters() {
    let initialCounters = [0,0,0]
    const [counters, setCounters] = useState(initialCounters)
    return(
        <div>
            <ul>
                {
                    counters.map(counter => (
                        <li>{counter} <button onClick={() => {
                            setCounters(counters.map())
                        }}>+1</button></li>
                    ))
                }
            </ul>
        </div>
    )
}