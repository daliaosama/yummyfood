import './Layout.css'
import restaurant from '/assets/restaurant.jpg'
import logo from '/assets/logo.png'
import { Link,Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faPhoneAlt ,faEnvelope, faBars ,faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
const Layout = () => {
  const [menuitems, setMenuItems] = useState(false);
  const handleMenu = () => {
    setMenuItems(true);
  }
  const handleMenuClose = () => {
    setMenuItems(false);
  }
  return (
    <main>
        <header>
            <div id="top">
            <img src={logo} className="logo" />
            <h1>Yummy Food </h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Servicespage">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            
            <Link to="/Booking">
            <button id="book">Book a table</button>

            </Link>
            <FontAwesomeIcon icon={faBars} size="2x"  className='menumo' onClick={handleMenu}/>
            </div>
            {menuitems==true &&(<div id="mobilemenu">
              
              <FontAwesomeIcon icon={faTimes} size="2x" onClick={handleMenuClose} className='close' />
                <Link to="/">Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/Servicespage">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
           
            
            </div>)}
            <div id="image">
           <img src={restaurant} id="res" />
             </div>
            
             
            
        </header>
      
        <Outlet></Outlet>
        <footer>
          <div className="logobottom">
          <img src={logo} className="logobot" />
          <span>Yummy Food </span>
          </div>
          <div id="bottom">
          
          <nav>
          <span>Yummy Food</span>
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Servicespage">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div id="contactbot">
            <span>Contact</span>
            <div id="location"> 
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#FF4500" />
            <span>Egypt</span></div>
         <div id="phone">
          <FontAwesomeIcon icon={faPhoneAlt} size="1x" color="#FF4500" />
          +20010040
         </div>
         <div id="mail">
         <FontAwesomeIcon icon={faEnvelope} size="1x" color="#FF4500" />
         <span>yummyfood@gmail.com</span>
         </div>
          </div>
          <div id="opening">
            <span>Opening</span>
            <span>Saturday-thursday</span>
            <span>10AM:12AM</span>
            <span>Friday</span>
            <span>01PM:12AM</span>
          </div>
          <div id="news">
            <span>newsletter</span>
            <p>Subscribe to get updates about meals and offers</p>
            <form >
            <input type="email" name="" id="" placeholder=' user@example.com' />
            <input type="submit" value="SiGNUP" id="sign" />
            </form>
          
          </div>
          </div>
          <hr />
          <p>&copy; 2024 Yummy Food</p>
          <p>All Rrights resrerved</p>
        </footer>
    </main>
  )
}

export default Layout