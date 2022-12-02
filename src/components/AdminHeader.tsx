import { Link } from 'react-router-dom'

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

const AdminHeader = () => {
    return (
        <header className="mb-8 flex bg-cyan-500">
            <h1 className="uppercase m-auto p-5 select-none">Admin Panel</h1>
            <Link to="additems"><button className="m-5 uppercase text-white bg-cyan-600 p-4 rounded-lg hover:bg-white hover:text-black transition ease-in-out delay-120">add items</button></Link>
            {/* <div className=" space-y-2 cursor-pointer p-5 m-0 hover:bg-cyan-600">
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
                <div className="w-8 h-0.5 bg-black"></div>
            </div> */}
            {/* <img className="mx-5  ml-auto hover:bg-cyan-600 transition ease-out delay-75 " src={reactLogo}/> */}
            
            {/* <img src={mGlass} className="h-7 w-7 content-center mt-auto mr-auto cursor-pointer"/> */}

            {/* <div className="space-x-3 my-5 mr-5">
            <button className={buttonStyle}>sign up</button>
            <button className={buttonStyle}>login</button>
            </div> */}
        </header>
)
}

export default AdminHeader;