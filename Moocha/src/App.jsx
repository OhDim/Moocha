import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import moochaLogo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="http://localhost:5173/" className='logoA'>
          <img src={moochaLogo} className="logo" alt="Moocha logo" />
        </a>
        <nav>
          <a href='/#'>Home</a>
          <a href='/#'>Products</a>
          <a href='/#'>Social Medias</a>
          <a href='/#'>About Us</a>
        </nav>
      </header>

    </>
  )
}

export default App
