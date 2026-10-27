import { useState } from 'react'
import {Header} from './components/Header'
import { Hero } from './components/Hero'
import { Shop } from './components/Shop'
import { About } from './components/About'
import { Footer } from './components/Footer'


export default function App() {
  return (
    <div className="min-h-screen bg-[4A2332] text-white">
      <Header/>
      <Hero/>
      <Shop/>
      <About/>
      <Footer/>
    </div>
      )
}