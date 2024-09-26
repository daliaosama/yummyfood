import "./Home.css";
import { useState } from "react";
import {
  faCoffee,
  faHamburger,
  faUtensils,
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YouTube from "react-youtube";
const Home = () => {
  const foodData = {
    breakfast: [
      {
        name: "beans",
        price: "Egp5",
        description: "beans with tahini",
        imageUrl: "/assets/beans.jpeg",
      },
      {
        name: "Omelette",
        price: "Egp10",
        description: "Cheese omelette with veggies",
        imageUrl: "/assets/omlette.jpg",
      },
      {
        name: "green burger",
        price: "Egp5",
        description: "green burger",
        imageUrl: "/assets/greenburger.jpg",
      },
      {
        name: "fries",
        price: "Egp10",
        description: "fries with katchup",
        imageUrl: "/assets/fries.jpg",
      },
      {
        name: "croissant",
        price: "Egp20",
        description: "croissant with cappuccino",
        imageUrl: "/assets/croissant.jpg",
      },
      {
        name: "Chocolate crepe",
        price: "Egp20",
        description: "Chocolate crepe",
        imageUrl: "/assets/Chocolatecrepe.jpg",
      },
      {
        name: "cheese ",
        price: "5Egp",
        description: "cheese with tomatoes",
        imageUrl: "/assets/cheese.jpeg",
      },
      {
        name: "Tahina salad",
        price: "3Egp",
        description: "Tahina salad with veggies",
        imageUrl: "/assets/tahina.jpeg",
      },
    ],
    Launch: [
      {
        name: "fried chicken",
        price: "Egp100",
        description: "",
        imageUrl: "/assets/friedchicken.jpg",
      },
      {
        name: "pizza",
        price: "Egp60",
        description: "",
        imageUrl: "/assets/pizza.jpg",
      },
      {
        name: "sushi",
        price: "Egp300",
        description: "",
        imageUrl: "/assets/sushi.jpg",
      },
      {
        name: "kofta",
        price: "Egp60",
        description: "",
        imageUrl: "/assets/kofta.jpg",
      },
      {
        name: "Spaghetti",
        price: "Egp100",
        description: "Spaghetti with meatballs",
        imageUrl: "/assets/spaghetti.jpg",
      },
      {
        name: "Breaded chicken",
        price: "Egp70",
        description: "Breaded chicken with Pasta",
        imageUrl: "/assets/Breaded chicken.jpg",
      },
      {
        name: "Steak",
        price: "Egp100",
        description: "steak",
        imageUrl: "/assets/steak.jpg",
      },
      {
        name: "Shish Tawouk",
        price: "Egp70",
        description: "Shish Tawouk",
        imageUrl: "/assets/ShishTawouk.jpg",
      },
    ],
    Dinner: [
      {
        name: "yogurt",
        price: "Egp7",
        description: "",
        imageUrl: "/assets/yogurt.jpg",
      },
      {
        name: "Steak",
        price: "Egp100",
        description: "Grilled steak with mashed potatoes",
        imageUrl: "/assets/steakwithmashed.jpg",
      },
      {
        name: "Spaghetti",
        price: "Egp100",
        description: "Spaghetti with meatballs",
        imageUrl: "/assets/spaghetti.jpg",
      },
      {
        name: "salmon",
        price: "Egp50",
        description: "lemon garlic salmon",
        imageUrl: "/assets/salmon.jpg",
      },
      {
        name: "sushi",
        price: "Egp300",
        description: "",
        imageUrl: "/assets/sushi.jpg",
      },
      {
        name: "pizza",
        price: "Egp60",
        description: "",
        imageUrl: "/assets/pizza.jpg",
      },
      {
        name: "fried chicken",
        price: "Egp100",
        description: "",
        imageUrl: "/assets/friedchicken.jpg",
      },
      {
        name: "fries",
        price: "Egp10",
        description: "fries with katchup",
        imageUrl: "/assets/fries.jpg",
      },
    ],
  };
  const videoId = "ylKa46SUDn0";
  const opts = {
    height: "300",
    width: "1099",
    playerVars: {
      autoplay: 1, // Auto-play the video
      mute: 1,
      loop: 1,
      controls: 0,
      playlist: videoId,
    },
  };
  
  const getResponsiveOpts = () => {
    
    if (window.innerWidth <= 812) {
      return {
        height: '350', // Smaller height for mobile
        width: '600', // Full width for mobile
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          playlist: videoId,
        },
      };
      
    }
   else if (window.innerWidth <= 344) {
      return {
        height: '200', // Smaller height for mobile
        width: '400', // Full width for mobile
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          controls: 0,
          playlist: videoId,
        },
      };
      
    }
    return opts; // Use default options for larger screens
  };
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  return (
    <div id="home">
      <div id="video">
        <YouTube videoId={videoId} opts={getResponsiveOpts()}/>
      </div>
      <div id="menu">
        <h1>food menu</h1>
        <h2>Most Popular</h2>
        <div className="selectmeal">
          <button className={selectedMeal=="breakfast"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("breakfast")}>
            
            <FontAwesomeIcon icon={faCoffee} />
            Popular Breakfast
          </button>
          <button className={selectedMeal=="Launch"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("Launch")}>
            <FontAwesomeIcon icon={faHamburger} /> Special Lunch
          </button>
          <button className={selectedMeal=="Dinner"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("Dinner")}>
            <FontAwesomeIcon icon={faUtensils} /> Lovely Dinner
          </button>
        </div>
        <div className="menuitems">
          {foodData[selectedMeal].map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.imageUrl} alt={item.name} className="meal" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
