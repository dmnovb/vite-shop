import React from "react";
import reactLogo from '../assets/react.svg'
import mGlass from '../assets/magnifying-glass.svg'
import background from '../assets/logi.webp'
import vector from '../assets/vector.svg'
import user from '../assets/user-6767.svg'
import { ShoppingCart } from "./ShoppingCart";

const liStyle = `hover:text-black 
                hover:bg-white 
                transition 
                ease-in delay-120  
                cursor-pointer 
                rounded-full 
                p-2 pl-3.5 pr-3.5 pt-1 pb-1 
                select-none`
                
const buttonStyle = `bg-cyan-600 
                    text-white 
                    pr-5 pt-3 pb-3 pl-5 
                    hover:text-black 
                    hover:bg-white 
                    transition ease-in-out delay 120
                    rounded-xl
                    uppercase
                    font-bold`

const Header = () => {
    return (
        <header className="mb-8 flex bg-cyan-500">
            {/* <img className="w-full h-full bg-cover relative" src={background} /> */}
            <img className="mx-5 py-5 ml-auto" src={reactLogo}/>
            <ul className="flex gap-3 mx-auto my-auto uppercase text-white font-bold text-base p-2">
                <li className={liStyle}>
                    shop
                </li>
                <li className={liStyle}>
                    learn
                </li>
                <li className={liStyle}>
                    business
                </li>
                <li className={liStyle}>
                    support
                </li>
            </ul>
            
            <img src={mGlass} className="h-7 w-7 mt-5 mr-auto cursor-pointer"/>

            <div className="space-x-3 my-auto mr-5">
            <button className={buttonStyle}>sign up</button>
            <button className={buttonStyle}>login</button>
            </div>
        </header>
)
}

export default Header;