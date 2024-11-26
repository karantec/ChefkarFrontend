import { Route, Routes } from "react-router-dom"
import Hom from "./Components/home/Hom"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import NotificationBanner from "./Components/Header/Head"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Header/Navbar"
import ChefConnection from "./Components/ChefConection/ChefConnection"
import Month from "./Components/CookForAmonth/Month"
import OneTime from "./Components/OneTimeCook/OneTime"
import Party from "./Components/Party/Party"

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
        <Route path="/cook-for-month" element={<Month/>}/>
        <Route path="/one-time-cook" element={<OneTime/>}/>
        <Route path="/chef-for-party" element={<Party/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
