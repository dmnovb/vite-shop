import shoppingCart from '../assets/shopping-cart-3041.svg'
import {useEffect, useState} from "react";

 

type Item = {
    _id: any; 
    name: string;
    description: string;
    price: number;
}

const AdminItems = () => {
    const [items, setItems] = useState<Item[]>([])
    const [response, setResponse] = useState<string>('')


    async function handleDeleteItems(id:any) {
        let deleteUrl =  `http://localhost:3000/items/` + id
        await fetch(deleteUrl, {
            method: "DELETE"
        }).then(response => {
            response.json()
            .then(setResponse)
        })
        window.location.reload()
        console.log(response)
    }

    useEffect(() => { 
        fetch('http://localhost:3000/items/')
        .then((response) => response.json())
        .then(setItems)

    }, [])



    return (
        <div>
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
                <button onClick={() => handleDeleteItems(item._id)} className="bg-red-500 uppercase p-3 rounded-md flex hover:bg-transparent transition ease-in-out delay-120 hover:text-red-500 hover: border-2 hover:border-red-500">Remove item</button>
                </div>
            ))}
        </div> 
        </div>
    )
}

export default AdminItems;