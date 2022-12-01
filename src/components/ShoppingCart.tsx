 import React from "react"; 
import {useState } from 'react';
import {CartItem } from "../components/CartItem";
// import { div, Stack, Button} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "./formatCurrency.ts";
import 'bootstrap/dist/css/bootstrap.css';

export function ShoppingCart({isOpen:{}, cartItems:{}}) {
    const {closeCart, emptyCart, displayMessage } = useShoppingCart()
    const [checkout, setCheckout] = useState(false)
    
    function handleCheckout(){ 
        setCheckout(true)
    }

 
    return <div >
        <div >
            <div>Cart</div>
        </div >
        <div  >
            <div>
            {cartItem.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
            Total{" "}
       
            {/* {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = cartItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}  */}
            </div>
            
            <button onClick={handleCheckout}>Checkout</button>
            {checkout && <button onClick={() => emptyCart()}className="btn btn-success">Buy now</button>}
            {displayMessage && <div className="alert alert-success" role="alert">
            Transaction Successful
            </div>}
            
            </div>
        </div >
    </div>
}
 