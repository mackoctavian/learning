import React, { useState } from 'react';


const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 2,
    }
];

export default function ObjectLearning() {
    const [
        products,
        setProducts
    ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        setProducts(products.map((product) => {
            if (productId === product.id) {
                return { ...product, count: product.count + 1 }
            } else {
                return { ...product }
            }
        }))
    }

    return (
        <ul>
            {products.map((product, index) => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                    <button onClick={() => {
                        setProducts(products.map(p => {
                            if (p.id ==product.id) {
                                if (product.count === 0){
                                    return {...p, count: 0}
                                }
                                return {...p, count: product.count -1}
                            }else {
                                return {...p}
                            }
                        }))
                    }}>
                        –
                    </button>
                </li>
            ))}
        </ul>
    );
}
