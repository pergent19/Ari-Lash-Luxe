import './App.css'
import Navbar from './components/header/navbar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Lash from './components/Lash'
import Facial from './components/Facial'
import Nails from './components/Nails'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Landing />
      <Gallery />
      <Lash />
      <Facial />
      <Nails />
    </div>
  )
}

export default App
