import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card user="Sahil" age={23} img="https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="Vishwajeet" age={19} img="https://media.istockphoto.com/id/1203815985/photo/planet-mercury-nebula-and-sunlight.webp?a=1&b=1&s=612x612&w=0&k=20&c=E2ix94EoG7bnCzJWYExZuN44oG_0DOuwaxLpFWVPdjE="/>
      <Card user="Koushal" age={20} img="https://media.istockphoto.com/id/182792016/photo/solar-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=qywsGSb53rMMJNarTTjiPyab8E2UOLK4_I-wLRJf-KM="/>
      
    </div>
  )
}

export default App
