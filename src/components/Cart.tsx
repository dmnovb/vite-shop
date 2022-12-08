import React, { useEffect, useState } from 'react'
 
import Header from './Header'
import remove_item from '../assets/remove_item.svg'
 
type cartItem = {
    itemId: any,
    count: number
}

type Item = {
    _id: any; 
    name: string;
    description: string,
    price: number;
}

const Cart = () => {
    const [cartItems, setCartItems] = useState<cartItem[]>([])
    const [itemsById, SetItemsById] = useState<Item[]>([])



    useEffect(() => {
        fetch('http://localhost:3000/cartItems/')
        .then(async (response) => {
            setCartItems(await response.json())
        });
    }, [])



    useEffect(() => {
        for(let i = 0; i < cartItems.length; i++){
            fetch(`http://localhost:3000/items/` + cartItems[i].itemId)
            .then(async (response) => {
            SetItemsById(await response.json())
        });    
    }
    }, [])
  
console.log(itemsById._id)
// console.log(itemsById)

    return (
        <div>
        <Header/>
            <h1 className='text-5xl p-5 ml-11 underline uppercase'>Your Cart</h1>
            <div className='p-5 m-11'>
               
                <div className='grid grid-cols-5 text-center p-1 border-4 bg-gray-200' id='table'>
                    <h1>Item name</h1>
                    <h1>Price</h1>
                    <h1>Count</h1>
                    <h1>Total</h1>
                </div>
                    <div className='grid grid-cols-5 text-center mt-4'>
                    {/* {itemsById.map(item => (
                        <h1>{item.name}</h1>
                    ))} */}

                        <h1>test item</h1>
                        <h1>$12</h1>
                        <h1>2</h1>
                        <h1>$24</h1>
                        <button className='mr-auto transition ease-in-out delay-55 hover:bg-gray-300 p-1 rounded-full'><img className='w-5 h-5' src={remove_item}/></button>
                    </div>
            </div>
        </div>   
    )
}

export default Cart;