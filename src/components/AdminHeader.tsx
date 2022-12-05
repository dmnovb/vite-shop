import { Link } from 'react-router-dom'
import React from 'react'
const liStyle = `hover:text-black 
                hover:bg-white 
                transition 
                ease-in delay-120  
                cursor-pointer 
                rounded-full 
                p-2 pl-3.5 pr-3.5 pt-1 pb-1 
                select-none`
                
const buttonStyle = `m-5 
                    uppercase 
                    text-white 
                    bg-cyan-600 
                    p-4 rounded-lg 
                    hover:bg-white 
                    hover:text-black 
                    transition ease-in-out 
                    delay-120`

const AdminHeader = () => {
    return (
        <header className="mb-8 flex bg-cyan-500">
            <h1 className="uppercase m-auto p-5 select-none">Admin Panel</h1>
            <Link to="additems">
                <button className={buttonStyle}>add items</button>
            </Link>
        </header>
)
}

export default AdminHeader;