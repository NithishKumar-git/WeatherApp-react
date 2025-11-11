import React from 'react'
import Weather from './components/Weather'
import Weathernav from './components/Weathernav'

function App() {
  return (
    <>
    <div>
    <Weathernav/>
    </div>

    
    <div>
   
      <Weather />
    </div>
    </>
  )
}

export default App