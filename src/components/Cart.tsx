import React from 'react'
 
import Header from './Header'
import remove_item from '../assets/remove_item.svg'
 

const Cart = (props:any) => {
    
    let all = localStorage.getItem('items')
    let allarray = JSON.parse(all ? all : '[]')
     
    let hash = new Map()
    console.log( "contents of all array:" )
    console.log(    allarray )
    for(let i = 0; i < allarray.length; i++) {
        let found = hash.get(allarray[i]._id)
        if(found == undefined) {
            let insert = {
                        name: allarray[i].name,
                        price: allarray[i].price,
                        count: 1
                    }
            hash.set(allarray[i]._id, insert)
        } else {
            found.count += 1             
        }
    }
   
    let arrayOfObjects = Array.from(hash.entries())
    
    console.log( "contents of hashed array:" )
    console.log(    arrayOfObjects )
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
        
                {arrayOfObjects.map((item:any) => (
                    <div className='grid grid-cols-5 text-center mt-4'>
                        <h1>{item[1].name}</h1>
                        <h1>${item[1].price}</h1>
                        <h1>{item[1].count}</h1>
                        <h1>${item[1].price * item[1].count}</h1>
                        <button className='mr-auto transition ease-in-out delay-55 hover:bg-gray-300 p-1 rounded-full'><img className='w-5 h-5' src={remove_item}/></button>
                    </div>
                ))}
            </div>
        </div>   
    )
}

export default Cart;