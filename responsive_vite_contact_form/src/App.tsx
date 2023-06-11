import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"
import ContactForm from './components/ContactForm'

function App() {

  return (
    <>
      <Header />
        <div className="container">
        <Home />
        <ContactForm />
      </div>
    </>
  )
}

export default App
