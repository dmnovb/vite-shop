import React from "react";
import {useEffect, useState} from "react";
 

type Item = {
    _id: any; 
    name: string;
    price: number;
}

const ItemsData = () => {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/items')
        .then((response) => response.json())
        .then(setItems)
    }, [])

    return (
        <div>
            <h1 className="uppercase text-5xl text-center mb-5">
                Advanced Gaming Gear
            </h1>
            <h2 className="text-center mb-5">Play at your peak with the highest performance gaming equipment from Logitech G.</h2>
        <div className="flex space-x-3">
            {items.map(item => (
                <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg p-5">
                    {item.name}
                <div className="px-6 py-4">
                    <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div>
                    ${item.price}
                </div>
                </div>
            ))}
        </div>
        </div>
    )
}

export default ItemsData;