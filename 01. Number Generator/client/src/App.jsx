import { useEffect, useState } from 'react'
import Number from './components/Number';
import LoadMore from './components/LoadMore';

function App() {
  const [list, setList] = useState([]);
  const [num, setNum] = useState(32);

  useEffect(() => {
    const arr = [...Array(num).keys()].map(id => {
      return {
        numb: id
      }
    })

    setList(arr);
  }, [num])

  return (
    <div className='w-full flex flex-col justify-center items-center gap-7'>
      <h1 className='mt-5 text-[40px] font-semibold md:text-5xl md:mt-14'>30 Days of React</h1>
      <h2 className='text-2xl'>Number Generator</h2>
      <div className='mt-3 grid grid-cols-4 w-fit gap-[1px] md:grid-cols-5 lg:grid-cols-8'>
        {list && (
          list.map(item => (
              <Number key={item.numb} list={list} item={item}/>
          ))
        )}
      </div>
      <LoadMore num={num} setNum={setNum}/>
    </div>
  )
}

export default App
