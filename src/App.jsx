import './App.css'
import Navbar from './components/header/Navbar'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Lash from './components/Lash'
import Facial from './components/Facial'
import Nails from './components/Nails'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <Landing />
      <Gallery />
      <Lash />
      <Facial />
      <Nails />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
