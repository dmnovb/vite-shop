const AddItems = () => {
    return (
        <div>
            <form className="grid mt-60">
                <label htmlFor="task_name" className="text-center ">Task Name</label>
                <input type="text" id="name" className="w-1/2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                <label htmlFor="task_price" className="text-center">Task Price</label>
                <input type="number" id="task_price" className="w-1/2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                <label htmlFor="task_description" className="text-center">Task Description</label>
                <input type="text" id="task_description" className="w-1/2 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                <button className="bg-cyan-500 m-auto mt-5 w-56 p-3 rounded-md  transition ease-in-out delay-120 hover:text-cyan-600 hover: border-2 hover:border-cyan-500 hover:bg-transparent ">Submit</button>
            </form>
      </div>
    )
}

export default AddItems;