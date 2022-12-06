import React from 'react'

import ItemsData from './ItemsData'
import {useEffect, useState} from 'react'

const Cart = (props:any) => {
    const [itemsCart, setItemsCart] = useState()
    
    let all = localStorage.getItem('items')
    let allarray = JSON.parse(all ? all : '')
    for(let i = 0; i < allarray.length; i++){
        console.log(allarray[i])
    }
    
    
    return (
            <div>{allarray.map((item:any, idx:number) => (
                <h1 key={idx}>{item.name}</h1>
            ))}</div>
    )
}

export default Cart;