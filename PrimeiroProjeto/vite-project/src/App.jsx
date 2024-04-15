import { useState } from 'react'
import './App.css'
import './Componentes/Navbar'
import './Componentes/SobreMim'
import './Componentes/Contato'
import './Componentes/Footer'
import Navbar from './Componentes/Navbar'
import SobreMim from './Componentes/SobreMim'
import Contato from './Componentes/Contato'
import Footer from './Componentes/Footer'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <SobreMim></SobreMim>
      <Contato></Contato>
      <Footer></Footer>
    </>
  )
}

export default App
