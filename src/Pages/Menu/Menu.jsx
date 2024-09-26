import "./Menu.css";
import { useState } from "react";
import {
  faCoffee,
  faHamburger,
  faUtensils,
  faBreadSlice,
  faCakeCandles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Menu = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  
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
      {name:"Tahina salad",
        price: "3Egp",
        description: "Tahina salad with veggies",
        imageUrl: "/assets/tahina.jpeg",
      }
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
        price: "Egp2",
        description: "",
        imageUrl: "/assets/yogurt.jpg",
      },
      {
        name: "Steak",
        price: "Egp20",
        description: "Grilled steak with mashed potatoes",
        imageUrl: "/assets/steakwithmashed.jpg",
      },
      {
        name: "Spaghetti",
        price: "Egp15",
        description: "Spaghetti with meatballs",
        imageUrl: "/assets/spaghetti.jpg",
      },
      {
        name: "salmon",
        price: "Egp20",
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
    drinks: [
      {
        name: "Cappuccino",
        price: "Egp10",
        description: "",
        imageUrl: "/assets/cappuccino.jpeg",
      },
      {
        name: "Milkshake",
        price: "Egp25",
        description: "",
        imageUrl: "/assets/milkshake.jpg",
      },
      {
        name: "icedcoffeewithcream",
        price: "Egp15",
        description: "icedcoffeewithcreammilk",
        imageUrl: "/assets/icedcoffeewithcreammilk.jpg",
      },
      {
        name: "tea",
        price: "Egp3",
        description: "tea",
        imageUrl: "/assets/tea.jpg",
      },
      {
        name: "frappuccino",
        price: "Egp15",
        description: "",
        imageUrl: "/assets/frappuccino.jpg",
      },
      {
        name: "Coffee",
        price: "Egp20",
        description: "Coffee",
        imageUrl: "/assets/coffee.jpg",
      },
      {
        name: "chocoholite coffee",
        price:"20Egp",
        description: "chocoholic cold coffee",
        imageUrl: "/assets/chocoholiccoldcoffee.jpg",
      },

      {
        name: "moca",
      price:"25Egp",
        description: "Moca Conconut Ice Coffee",
        imageUrl: "/assets/moca.jpeg",
      },
    ],
    deserts: [
      {
        name: "ice cream",
        price: "Egp15",
        description: "",
        imageUrl: "/assets/icecream.jpg",
      },
      {
        name: "chocolate cake",
        price: "Egp25",
        description: "",
        imageUrl: "/assets/chocolatecake.jpeg",
      },
      {
        name: "chocolate brownie",
        price: "Egp25",
        description: "chocolate brownie ice cream",
        imageUrl: "/assets/chocolatebrownie.jpg",
      },
      {
        name: "Strawberry cake",
        price: "Egp25",
        description: "",
        imageUrl: "/assets/Strawberrycake.jpg",
      },
      {
        name: "Oreo",
        price: "Egp35",
        description: "",
        imageUrl: "/assets/oreo.jpeg",
      },
      {
        name: "Doughnut",
        price: "Egp20",
        description: "",
        imageUrl: "/assets/Doughnut.jpeg",
      },
      {
        name: "ice cream cake",
        price: "Egp25",
        description: "",
        imageUrl: "/assets/icecreamcake.jpeg",
      },
      {
        name: "cheese cake",
        price: "Egp30",
        description: "peanut Butter cheese cake",
        imageUrl: "/assets/cheesecake.jpeg",
      },
    ],
    sandwitches: [
      {
        name: "fried chichecken",
        price: "Egp45",
        description: "fried chicken sandwitch",
        imageUrl: "/assets/fried.jpg",
      },
      {
        name: "Hamburger",
        price: "Egp45",
        description: "Hamburger sandwitch",
        imageUrl: "/assets/hamburger.jpg",
      },
      {
        name: "Crispy Fish",
        price: "Egp50",
        description: "Crispy Fish sandwitch",
        imageUrl: "/assets/CrispyFish.jpg",
      },
      {
        name: "Steak",
        price: "Egp65",
        description: "Steak sandwitch",
        imageUrl: "/assets/steaksandwich.jpg",
      },
      {
        name: "Shish Tawouk",
        price: "Egp45",
        description: "Shish Tawouk sandwitch",
        imageUrl: "/assets/shishtawouk (2).jpg",
      },
      {
        name: "Shawarma",
        price: "Egp45",
        description: "Shawarma meat sandwitch",
        imageUrl: "/assets/Shawarma.jpg",
      },
      {
        name: "Kofta",
        price: "Egp40",
        description: "Kofta sandwitch",
        imageUrl: "/assets/kofta.jpeg",
      },
      {
        name: "green burger",
        price: "Egp10",
        description: "green burger sandwitch",
        imageUrl: "/assets/greenburger.jpeg",
      },
    ],
  };
 
  return (
    <div id="Menu">
      <div id="menurecepies">
        <h1>food menu</h1>
        <div className="select">
          <button className={selectedMeal=="breakfast"? 'border-b-4 border-red-500' : ''}onClick={() => setSelectedMeal("breakfast")}>
          
            <FontAwesomeIcon icon={faBreadSlice} /> Popular Breakfast
          </button>
          <button className={selectedMeal=="drinks"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("drinks")}>
           
            <FontAwesomeIcon icon={faCoffee} /> Drinks
          </button>
          <button className={selectedMeal=="deserts"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("deserts")}>
            <FontAwesomeIcon icon={faCakeCandles} /> Deserts
          </button>
          <button
            className={selectedMeal=="sandwitches"? 'border-b-4 border-red-500' : ''}
            onClick={() => setSelectedMeal("sandwitches")}
          >
           
            <FontAwesomeIcon icon={faHamburger} /> Sandwitches
          </button>
          <button className={selectedMeal=="Launch"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("Launch")}>
            <FontAwesomeIcon icon={faHamburger} /> Special Lunch
          </button>
          <button className={selectedMeal=="Dinner"? 'border-b-4 border-red-500' : ''} onClick={() => setSelectedMeal("Dinner")}>
            <FontAwesomeIcon icon={faUtensils} /> Lovely Dinner
          </button>

          
        </div>
        <div className="items">
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

export default Menu;
