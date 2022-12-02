import { useState } from 'react'
import reactLogo from '../assets/react.svg'

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
    }
   

    return (
        <div className="">
            <img src={reactLogo} className="mx-auto mt-5 h-12 w-auto"/>
            <form className="grid mt-60" onSubmit={handleSubmit}>
                <label htmlFor="task_name" className="text-center ">Task Name</label>
                <input value={itemName} onChange={(e) =>  setItemName(e.target.value)}type="text" id="name" className={style} required/>
                <label htmlFor="task_price" className="text-center">Task Price</label>
                <input value={itemPrice} onChange={(e) => setitemPrice(e.target.value)} type="number" id="name" className={style}  required/>                
                <label htmlFor="task_description" className="text-center">Task Description</label>
                <input value={itemDescription} onChange={(e) =>  setitemDescription(e.target.value)} type="text" id="name" className={style} required/>               
                <button className="bg-cyan-500 m-auto mt-5 w-56 p-3 rounded-md  transition ease-in-out delay-120 hover:text-cyan-600 hover: border-2 hover:border-cyan-500 hover:bg-transparent ">Submit</button>
            </form>
      </div>
    )
}

export default AddItems;