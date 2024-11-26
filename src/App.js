import { Route, Routes } from "react-router-dom"
import Hom from "./Components/home/Hom"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NotificationBanner from "./Components/Header/Head"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import ChefConnection from "./Components/ChefConection/ChefConnection"

const App = () => {
  return (
    <div>
      <NotificationBanner/>
      <Navbar/>
       <Routes>
        <Route path="/" element={ <Hom/> } />
        <Route path="about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/join-chefkart" element={<ChefConnection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
