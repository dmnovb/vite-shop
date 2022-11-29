import React from "react";
import reactLogo from '../assets/react.svg'

const Header = () => {
    return (
        <header className="mx-auto pb-8 bg-cyan-500 flex">
            <img className="mx-5 py-5" src={reactLogo}/>
            <ul className="flex space-x-7 mx-auto my-auto uppercase text-white">
                <li>
                    shop
                </li>
                <li>
                    learn
                </li>
                <li>
                    business
                </li>
                <li>
                    support
                </li>
            </ul>
        </header>
    )
}

export default Header;