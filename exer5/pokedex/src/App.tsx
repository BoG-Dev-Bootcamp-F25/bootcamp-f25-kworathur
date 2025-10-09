import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>Exercise 5 - Pokedex !</h1>

                <div className="flex flex-row">
                    <div className="">
                        <a href="https://vite.dev" target="_blank">
                            <img
                                src={viteLogo}
                                className="logo"
                                alt="Vite logo"
                            />
                        </a>
                    </div>
                    <div className="">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
