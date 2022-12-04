import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

const AddItems = () => {
    
    const style = `w-1/2 m-auto 
    bg-gray-50 border 
    border-gray-300 
    text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 block 
    p-2.5  dark:placeholder-gray-400dark:focus:border-blue-500`

    const [itemName, setItemName ] = useState<string>()
    const [itemDescription, setitemDescription] = useState<string>()
    const [itemPrice, setitemPrice] = useState<any>()
    const [isAdded, setIsAdded] = useState<boolean>(false)

    const handleSubmit = (event:any) => {
        event.preventDefault()
        const itemObject = {
            name: itemName,
            description: itemDescription,
            price: itemPrice
        }    

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(itemObject)
        })
        
        setItemName('')
        setitemDescription('')
        setitemPrice('')
        setIsAdded(true)
        setTimeout(() => {
            setIsAdded(false)
        }, 3000)
    }
   

    return (
        <div>
           <Link to="/admin"><p className="mt-5 p-5 uppercase hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2"/>
                Go back
            </p></Link> 
            <img src={reactLogo} className="mx-auto mt-5 h-12 w-auto"/>
            <form className="grid mt-60" encType="multipeart/form-data" onSubmit={handleSubmit}>
                <label htmlFor="task_name" className="text-center mb-5">Task Name</label>
                <input value={itemName} onChange={(e) =>  setItemName(e.target.value)}type="text" id="name" className={style} required/>
                <label htmlFor="task_price" className="text-center mb-5 mt-5">Task Price</label>
                <input value={itemPrice} onChange={(e) => setitemPrice(e.target.value)} type="number" id="name" className={style}  required/>                
                <label htmlFor="task_description" className="text-center mb-5 mt-5">Task Description</label>
                <input value={itemDescription} onChange={(e) =>  setitemDescription(e.target.value)} type="text" id="name" className={style} required/>               
                <button className="bg-cyan-500 m-auto mt-5 w-56 p-3 rounded-md  transition ease-in-out delay-120 hover:text-cyan-600 hover: border-2 hover:border-cyan-500 hover:bg-transparent ">Submit</button>
            </form>
            {isAdded && <div className="text-center m-auto mt-11 bg-green-500 w-1/2 p-3 transition ease-in-out delay-75">Item Added</div>}
      </div>
    )
}

export default AddItems;