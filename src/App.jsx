import './App.css'
import Navbar from './components/header/navbar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Lash from './components/Lash'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Landing />
      <Gallery />
      <Lash />
    </div>
  )
}

export default App
