import React from 'react'
import { dataForm } from '../models'

interface props {
    processData: dataForm
    dataFile: dataForm[]
    setDataFile: React.Dispatch<React.SetStateAction<dataForm[]>>
    totalItemsCount: number
}

const SingleItem:React.FC<props> = ({processData, dataFile, setDataFile,totalItemsCount }) => {
    // handle checked item
    const handleDone = (id: number, singleItemId:number) => {
        // get the current category
        let tempItem = dataFile.filter(e => e.id === id)
        // get the clicked item in the category items 
        let tempSingle = tempItem[0].items.map(e => e.id === singleItemId ? {...e, isDone: !e.isDone} : e)

        // replace the checked item in the category
        tempItem[0] = { ...tempItem[0], items: tempSingle}

        // replace the category in the entire data file
        setDataFile(dataFile.map(e => e.id === id ? tempItem[0]: e))

        
    }
    let trueArray:boolean[] =[]
    
    // check iff all the items in a category has been checked to turn background to green
        for (let i = 0; i < processData.items.length; i++) {
            trueArray.push(processData.items[i].isDone)
            
            
        }
        
 
    
    
  return (
      <div className={`${trueArray.every( (val, i, arr) => val === true) ? "bg-green-300" : "bg-gray-100" } m-2 p-3 rounded`}>

        <form>
            <h3 className='font-bolder text-3xl my-4'>{processData.categoryName}</h3>
            {processData.items.map(item  => 
       

            (
                
                item.isDone ? (
                    <s key={item.id}><label className='block' >
                    <input type="checkbox" checked={item.isDone} onChange={()=> handleDone(processData.id, item.id)} /> <span>{item.name}</span>
                </label></s>
                ): (
                    <label key={item.id} className='block' >
                <input type="checkbox" checked={item.isDone} onChange={()=> handleDone(processData.id, item.id)} /> <span>{item.name}</span>
            </label>
                )                

            )
            
            )}
            
        </form>
    </div>
  )
}

export default SingleItem