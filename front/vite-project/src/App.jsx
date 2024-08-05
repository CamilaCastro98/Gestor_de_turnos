import Home from './views/Home/Home';
import "../styles/App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';
import MySchedule from './views/MySchedule/MySchedule';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUserId } from "../src/redux/reducer";

function App() {
  const location = useLocation();
  const userLogged = useSelector(selectUserId);

  const showNavbar = location.pathname !== "/register" && location.pathname !== "/login";
  const showFooter = location.pathname !== "/register" && location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {userLogged && <Route path="/schedule" element={<MySchedule />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {showFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}

export default App;

