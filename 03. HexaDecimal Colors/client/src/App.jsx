import { useEffect, useState } from 'react'
import Card from './components/Card';

function App() {
  const [colors, setColors] = useState([]);
  
  useEffect(() => {
    const arr = [...Array(27).keys()].map(id => {
      const randHex = "#" + Math.random().toString(16).substr(2, 6);
      return{
        id: id+1,
        color: randHex
      }
    })

    setColors(arr);
  }, [])

  return (
    <div className='flex flex-col items-center justify-center '>
      <h1 className='text-6xl font-semibold mt-10'>30 Days Of React</h1>
      <h2 className='text-4xl mt-5'>Hexadecimal Colors</h2>
      <div className='grid grid-cols-6 gap-3 mt-10'>
        {colors.map(color => (
          <Card color={color} colors={colors} setColors={setColors}/>
        ))}

      </div>
    </div>
  )
}

export default App
