import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { data } from "./dataFile";
import SingleItem from './components/SingleItem';
import { dataForm } from './models';



const App:React.FC = () => {

  const [dataFile, setDataFile] = useState<dataForm[]>(data)
const [randomQuote, setRandomQuote] = useState<string>('')
  let progressCount:number = 0; 
  let totalItemsCount:number = 0; 
  let progressInPercentage: number ;


  // calculate progress
  dataFile.forEach(e => e.items.forEach(i =>  {
    // add one to the  count if listed item is checked
    progressCount = i.isDone ? progressCount +=1 : progressCount
    // count the total items to be checked
    totalItemsCount += 1
  }) 
  )

  // fetch random quote from the API abnd store it in randomQuote state
  const getRandomQuote = () => fetch("https://uselessfacts.jsph.pl/random.json")
    .then(res => res.json())
    .then(r => setRandomQuote(r.text))
    // .catch(err => console.log(err.message))

    // calculate progress in percentage
  progressInPercentage = (progressCount/totalItemsCount)*100

  // if all steps are completed, display the quote
  if(progressInPercentage === 100) alert(randomQuote)


useEffect(() => {
  getRandomQuote()
}, [])



  return (
    <div className="App">
      {/* Navigator and heading */}
      <Nav />

      <div className='flex p-4'>
      {/* display progress in percentage */}
      <span className="text-2xl my-auto ml-auto mr-6 "> Progress {progressInPercentage } %</span>
      </div>
      {/* Card list */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 w-[80%] mx-auto">
        {dataFile.map(e => (

        //  displays individual card
        <SingleItem  
        key={e.id}
          processData={e} 
          dataFile={dataFile}
          setDataFile={setDataFile}
          totalItemsCount={totalItemsCount}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
