import { useState } from 'react'
import { tenHighestPopulation } from './data/Population'
import Country from './components/Country'

function App() {
  const [data, setData] = useState(tenHighestPopulation)

  return (
    <div className='p-4 flex flex-col justify-center items-center gap-5 mt-10'>
      <h1 className='text-5xl font-semibold'>30 Days of React</h1>
      <h2 className='text-3xl font-light '>World Population</h2>
      <h5 className='text-sm'>Ten most populated countries</h5>
      <div className='w-[75%] flex flex-col gap-3 mt-8'>
        {data.map(entry => (
          <Country key={entry.country} entry={entry}/>
        ))}
      </div>
    </div>
  )
}

export default App
