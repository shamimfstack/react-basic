
// import { useState } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <button className='bg-green-600 text-white px-3 py-2 rounded-md' type='button' onClick={() => setCount(count + 1)}>Clicked {count} times</button> */}
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
      </div>
    </>
  )
}

export default App
