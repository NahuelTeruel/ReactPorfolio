import './App.css'
import AboutMe from './components/aboutMe/AboutMe'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Servicios from './components/servicios/Servicios'
import Skills from './components/skills/Skills'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Servicios/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
