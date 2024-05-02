import React, { useState } from 'react';


const Artist = () => {
    let initialArtists = [
        { id: 0, name: "Mack Octavian" },
        { id: 1, name: "Michael Octavian" },
        { id: 2, name: "Chris Octavian" },
    ]

    const [artists, setArtists] = useState(initialArtists)

    const handleDelete = () => {
        setArtists(() => artists.filter(artist => artist.id !== artists.id))
    }


    return (
        <div>
            <h1>Inspiring Sculptors:</h1>
            <ul>
                {
                    artists.map(artist => (
                        <div>
                            <li key={artist.id}>{artist.name}</li>
                            <button onClick={
                                () => {setArtists(artists.filter(a => a.id !== artist.id))}
                            }>Delete</button>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default Artist;