import React from 'react'

const Cart = (props: any) => {
    let asdf = [1,2,3,4,5]

    return (
    
        <div>{asdf.map((item, index) => (
            <h1 key={index}>{item}</h1>
        ))}</div>
        // <div>{Object.values(props.cartItems).map((items:any) => (
        //     <h1>{items}</h1>
        // ))}</div>
        // <div>
        //     {items.map((item:any, index:number) => (
        //         <h1 key={index}>{item}</h1>
        //     ))}
        // </div>
    )
}

export default Cart;