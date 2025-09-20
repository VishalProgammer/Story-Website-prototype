import './App.css'
import { Header } from './pages/header'
import { Story } from './pages/story'
import { useState } from 'react'

function App() {
const [story, setstory] = useState(true);

  return (
    <>
    <Header></Header>
    <Story></Story>
    </>
  )
}

export default App
