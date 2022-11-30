import React from "react";
import {useEffect, useState} from "react";
import Carousel from './Carousel'

type Item = {
    _id: any; 
    name: string;
    price: number;
}

const ItemsData = () => {
    const [items, setItems] = useState<Item[]>([])

    // const itemFetch = () => {
        
    // }

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then((response) => response.json())
        .then(setItems)
    }, [])

    return (
        <div>
            <h1 className="uppercase text-5xl text-center">
                Advanced Gaming Gear
            </h1>
            <h2 className="text-center">Play at your peak with the highest performance gaming equipment from Logitech G.</h2>
            <div>{items.map(item => (
                <li key={item._id}>{item.name}</li>
            ))}
            </div>
        </div>
    )
}

export default ItemsData;