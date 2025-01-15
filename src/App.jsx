import { useState } from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
     <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
        <Hero/>
        <About/>
     </main>
    </>
  )
}

export default App
