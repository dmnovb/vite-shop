import React from "react";
import {useEffect, useState} from "react";

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
        <div>{items.map(item => (
            <li key={item._id}>{item.name}</li>
        ))}
        </div>
    )
}

export default ItemsData;