import './ServicePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie ,faUtensils, faCartPlus ,faHeadset } from '@fortawesome/free-solid-svg-icons';
const Servicespage = () => {
  return (
    <div id="servicepage">
      
      <div className="Services">
      <h1 >
        Our Services
      </h1>
      <h2 >Explore Our Services</h2>
        <div className="content">
        <div className="service">
      <FontAwesomeIcon icon={faUserTie} size="3x" color="#cf484a" className='serviceicon'/>
      <h1>Master Chefs</h1>
      <p>experience chefs</p>
      </div>
      <div className="service">
      <FontAwesomeIcon icon={faUtensils} size="3x" color="#cf484a" className='serviceicon'/>
      <h1>Quality Ingredients</h1>
      <p>best food quality</p>
      </div>
      <div className="service">
      <FontAwesomeIcon icon={faCartPlus} size="3x" color="#cf484a" className='serviceicon'/>
      <h1>Online Order</h1>
      <p>24 hours fast delivery</p>
      </div>
      <div className="service">
      <FontAwesomeIcon icon={faHeadset} size="3x" color="#cf484a"className='serviceicon' /> 
      <h1>24/7 Service</h1>
      <p>open all days of week</p>
      </div>
        </div>
    
      </div>
      
      
    </div>
  )
}

export default Servicespage