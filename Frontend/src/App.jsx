import { useEffect, useState } from 'react'
import './app.css'
import Post from './Post.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [status, setStatus] = useState("idle")


  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const handleInput = (val) => {
    setSeconds(val.target.value)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-sans">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full text-center border border-gray-100">
        
        <input 
          onChange={handleInput} 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Enter seconds"
          className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-6"
        />
        
        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Timer</span>
          <h1 className="text-5xl font-extrabold text-blue-600 tabular-nums">{seconds}</h1>
        </div>
        
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Count</span>
          <h1 className="text-4xl font-bold text-gray-800 tabular-nums">{count}</h1>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={increase}
            className="flex-1 px-4 py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-150"
          >
            Add to count
          </button>
          
          <button 
            onClick={decrease}
            className="flex-1 px-4 py-2.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-150"
          >
            Sub to count
          </button>
        </div>

      </div>

      <Post />
    </div>
  )
}

export default App





