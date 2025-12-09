import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

//components
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

//pages
import AboutPage from './pages/About/AboutPage'
import HomePage from './pages/Home/HomePage'
import ContactPage from './pages/Contact/ContactPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
      <Navbar />
     </header>
     <main>
        <HomePage /> 
     </main>
     <footer>
      <Footer />
     </footer>
    </>
  )
}

export default App
