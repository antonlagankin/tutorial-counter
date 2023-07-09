import { useState } from "react"

export interface ICounterInitialValue {
    initialValue: number
}

export function Counter({initialValue}: ICounterInitialValue) {
    const [counter, setCounter] = useState(initialValue)

    function increment() {
      setCounter(counter + 1)
    }
  
    function decrement() {
      setCounter(counter - 1)
    }

    return (
        <div className='border-gray-200 border-2 p-8 rounded-lg text-center'>
            <h2 className="text-2xl font-bold text-slate-600">
            Counter:
            </h2>
            <h1 className="text-6xl font-bold py-4">
            {counter}
            </h1>
            <button className="bg-red-500 text-white mr-2 my-2 px-4 py-2 rounded-lg" onClick={decrement}>
            - Minus
            </button>
            <button className="bg-teal-600 text-white ml-2 my-2 px-4 py-2 rounded-lg" onClick={increment}>
            Plus +
            </button>
        </div>
    )
}