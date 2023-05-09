import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Tours from './components/tours/Tours'
import WhyUs from './components/WhyUs.jsx/WhyUs'
import AboutUs from './components/about/AboutUs'
import Contact from './components/contact/Contact'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Tours/>
      <WhyUs/>
      <AboutUs/>
      <Contact/>
    </div>
  )
}

export default App
