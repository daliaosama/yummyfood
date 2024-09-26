
import './App.css'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Pages/Layout/Layout'
import Home from './Pages/Home/Home';
import About from './Pages/ِAbout/About';
import Contact from './Pages/Contact/Contact';
import Menu from './Pages/Menu/Menu';
import Servicespage from './Pages/Servicespage/Servicespage';
import Booking from './Pages/Booking/Booking';
function App() {

  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}></Route>
  <Route path="/Menu" element={<Menu/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/Servicespage" element={<Servicespage/>}></Route>
  <Route path="/Booking" element={<Booking/>}></Route>
</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
