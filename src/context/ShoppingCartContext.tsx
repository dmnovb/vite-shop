import { createContext, useContext, ReactNode, useState} from "react";
import {ShoppingCart} from '../components/ShoppingCart'
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    name: string
    quantity: number
    price: number
    category: string
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    // increaseCartQuantity: (id: number, name: string, price: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    emptyCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    displayMessage: boolean
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [displayMessage, setDisplayMessage] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)


    const openCart =() => setIsOpen(true)
    const closeCart =() => setIsOpen(false)


    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
 
    // function increaseCartQuantity(id: number, name: string, price: number) {
    //     setCartItems(currItems => {
    //         if(currItems.find(item=> item.id === id) == null) {
    //             return [...currItems, {id, quantity:1, name, price}]
    //         } else {
    //             return currItems.map(item => {
    //                 if(item.id === id) {
    //                     return {...item, quantity: item.quantity + 1, name:name}
    //                 } else {
    //                     return item
    //                 }
    //             })
    //         }
    //     })
    // }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id ===id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item=>{
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function emptyCart() {
        setCartItems([])
        setDisplayMessage(true)
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, 
    // increaseCartQuantity, 
    decreaseCartQuantity, 
    removeFromCart, 
    displayMessage,
    cartItems,
    cartQuantity, openCart, closeCart, emptyCart}}>
        {children}
       
    <ShoppingCart isOpen = {isOpen} cartItems={cartItems}/>
    </ShoppingCartContext.Provider>
}
