import React from "react";
import reactLogo from '../assets/react.svg'
import mGlass from '../assets/magnifying-glass.svg'
import background from '../assets/logi.webp'
import vector from '../assets/vector.svg'
import user from '../assets/user-6767.svg'

const liStyle = `hover:text-black 
                hover:bg-white 
                transition 
                ease-in delay-120  
                cursor-pointer 
                rounded-full 
                p-2 pl-3.5 pr-3.5 pt-1 pb-1 
                select-none`
                

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
            <div className="flex">
            {/* <img src={user} className="h-4 w-4 mr-12 mt-6 cursor-pointer"/> */}
            </div>
        </header>
    )
}

export default Header;