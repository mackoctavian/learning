import React, { useState } from 'react';


const Shapes = () => {
    let initialShapes = [
        {id: 0, type: 'circle', x: 50, y: 100},
        {id: 1, type: 'square', x: 150, y: 100},
        {id: 2, type: 'circle', x: 250, y: 100},
    ]

    return(
        <div>
            <button>Move Circles Down</button>
            {
                Shapes.map(shape => (
                    <div
                        key={shape.id}
                        style={{
                            background: 'purple',
                            position: 'absolute',
                            left: shape.x,
                            top: shape.y,
                            borderRadius: shape.type === 'circle' ? '50%' : '',
                            width: 20,
                            height: 20,
                        }}
                    ></div>
                ))
            }
        </div>
    )
}

export default Shapes