import React from "react";
import shoppingCart from '../assets/shopping-cart-3041.svg'
import {useEffect, useState} from "react";

 

type Item = {
    _id: any; 
    name: string;
    description: string;
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
        <div className="grid grid-cols-3 gap-2 place-items-center ">
            {items.map(item => (
                <div key={item._id} className="max-w-sm rounded overflow-hidden shadow-lg p-5">
                    {item.name}
                <div className="px-6 py-4">
                    <p className="text-gray-700 text-base">
                    {item.description}
                    </p>
                </div>
                <div>
                    ${item.price}
                </div>
                <button className="bg-blue-500 uppercase p-3 rounded-md flex hover:bg-transparent transition ease-in-out delay-120 hover:text-blue-500 hover: border-2 hover:border-blue-500"><img className="w-5 h-5 mt-1 mr-1  fill-blue-500" src={shoppingCart}/> add to cart</button>
                </div>
            ))}
        </div> 
        </div>
    )
}

export default ItemsData;