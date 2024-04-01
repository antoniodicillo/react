import { useState } from 'react'
import './App.css'
import './Componentes/Navbar'
import './Componentes/SobreMim'
import './Componentes/Contato'
import Navbar from './Componentes/Navbar'
import SobreMim from './Componentes/SobreMim'
import Contato from './Componentes/Contato'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <SobreMim></SobreMim>
      <Contato></Contato>
    </>
  )
}

export default App
