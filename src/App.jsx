import React from 'react'
import Nav from './Componet/Nav/Nav'
import Hero from "./Componet/Hero/Hero"
import "./css/default.css"
import Footer from './Componet/Footer/Footer'
export default function App() {
  return (
    <div className='default'>
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}
