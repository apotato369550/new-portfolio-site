import './App.css'
import Header from './components/header'
import Home from './components/home'
import Hex from './components/hex'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <Home />
        <Hex />
      </div>
    </>
  )
}

export default App
