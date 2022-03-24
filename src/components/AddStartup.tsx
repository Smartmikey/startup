import React from 'react'
import { PlusCircleIcon } from "@heroicons/react/outline";

const AddStartup:React.FC = () => {
  return (
    <form className=' p-8 align-middle flex space-x-3'>
        <input placeholder='Add a new startup' className='border-2 p-3 rounded-lg m'/>
        <button type='submit'><PlusCircleIcon className='h-8 my-auto' /></button>
    </form>
  )
}

export default AddStartup