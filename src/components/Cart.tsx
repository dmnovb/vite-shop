import React from 'react'

import ItemsData from './ItemsData'
import {useEffect, useState} from 'react'
import Header from './Header'
import remove_item from '../assets/remove_item.svg'

const Cart = (props:any) => {
    
    let all = localStorage.getItem('items')
    let allarray = JSON.parse(all ? all : '')
    
    function removeFromLocalStorage(id:any){
        localStorage.removeItem(id)

    }

    console.log(allarray[0]._id)

    return (
            // <div >
            //     <div>{allarray.map((item:any, idx:number) => (
            //         <h1 key={idx}>{item.name}</h1>
            //     ))}</div>
            // </div>
        <div>
        <Header/>
            <h1 className='text-5xl p-5 ml-11 underline'>YOUR CART</h1>
            <div className='p-5 m-11'>
                
                <div className='grid grid-cols-5 text-center p-1 border-4 bg-gray-200' id='table'>
                    <h1>Item name</h1>
                    <h1>Price</h1>
                    <h1>Count</h1>
                    <h1>Total</h1>
                </div>
                {allarray.map((item:any) => (
                <div className='grid grid-cols-5 text-center mt-4'>
                    <h1>{item.name}</h1>
                    <h1>${item.price}</h1>
                    <h1>2</h1>
                    <h1>${item.price}</h1>
                    <button onClick={() => removeFromLocalStorage(item._id)} className='mr-auto transition ease-in-out delay-55 hover:bg-gray-300 p-1 rounded-full'><img className='w-5 h-5' src={remove_item}/></button>
                </div>    
                ))}
            </div>
        </div>
    )
}

export default Cart;