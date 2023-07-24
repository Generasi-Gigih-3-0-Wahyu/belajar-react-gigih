import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-300 flex flex-col items-center justify-center space-y-4'>
      <h1 className='text-green-500 text-5xl font-semibold'>React Gigih 3.0</h1>
      <div className="flex flex-col items-center">
        <button className='bg-gray-500 hover:bg-gray-400 rounded-md px-4 py-2' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
