import Home from './views/Home/Home'
import "../styles/App.module.css"
import Footer from "./components/Footer/Footer"
import Navbar from './components/Navbar/Navbar'
import MySchedule from './views/MySchedule/MySchedule'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import About from './views/About/About'
import Contact from './views/Contact/Contact'
import { Routes,Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux"
import { selectUserId } from "../src/redux/reducer"

function App() {

  const location = useLocation()
  const userLogged = useSelector(selectUserId)

  return (
    <>
      {location.pathname === "/register" || location.pathname === "/login" ? null : < Navbar/>}
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/about" element={< About />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
        { userLogged && <Route path="/schedule" element={< MySchedule />}></Route> }
        <Route path="/register" element={< Register />}></Route>
        <Route path="/login" element={< Login />}></Route>
      </Routes>
      <footer>
         <Footer/>
      </footer>
    </>
  )
  
}

export default App
