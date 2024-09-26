import './About.css'
import logo from '/assets/logo.png'
import res from '/assets/restaurant.png'
import res1 from '/assets/cozy.png'
const About = () => {
  return (
    <div id="AboutPage">
      
      <div className="images">
  <img src={res} className="img" />
  <img src={res1} className="img1" />
      </div>
      <div id="About">
      <h1>About Us</h1>
      <div id="yummy">
        <span>welcome to</span><img src={logo}className='lo' /> <span> Yummy food Restaurant</span>
      </div>
     
      
        <p>Yummy food is a restaurant 
          that serves a variety of delicious food. </p>
          <p>Our restaurant is known for its quality food and excellent service. </p>
          <p>We have a wide range of dishes to choose from</p>
          <div id="aboutus">
          <div id="experience">
            20 
          <span>years of <br />experience</span>  
          </div>
          <div id="chef">
            30 
            <span>Pobular <br />Master Chefs</span>
          </div>
          </div>
          
          
      </div>
     
    </div>
  )
}

export default About