import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header  from './components/Header'
import Home from "./components/Home"
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import ContactPage from './components/ContactMe'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about-me" element={ <AboutMe /> }/>
        <Route path="/projects" element={ <MyProjects /> }/>
        <Route path="/contact-me" element={ <ContactPage /> }/>
      </Routes>
    </>
  )
}

export default App
