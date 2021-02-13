import { Link } from 'react-router-dom';

//Use ROUTER to a new page for
//Have all categories listed
//Redirect 
//Make API call and map through categories in the Object
//?Check if API has categories property in the object

//Look into overflow in CSS
//


//HOW TO CREATE CATEGORY CARDS
//have an array of categories as strings
//map through the array that has state 

//create a component that takes the string as a prop
//getData() when the component is rendered, use effect 
//use React Router to route the click on the card

//NavLink to -> RecipeHolder
//State= category
// You can wrap a navlink in a compontent, and style the component (even add buttons)

// const healthLabels = [“vegan”, “vegetarian”, “paleo”, “dairy-free”, “gluten-free”, “wheat-free”, “fat-free”, “low-sugar”, “egg-free”, “peanut-free”];

//make an array of objects 
//inside of each object include the label and the route
//make the label for each link  

// label: "Tree Nut Free"
// '?q=tree-nut-free'

{/* <ul>
          <li>
            <Link to="/vegan">Vegan</Link>
          </li>
          <li>
            <Link to="/vegetarian">Vegetarian</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul> */}

const Categories = () => {
  return (
    <ul>
      <li>
          <Link to="/vegetarian">🥒Vegetarian</Link>
      </li>
      <li>
          <Link to="/FODMAP">🤷🏾‍♂️FODMAP</Link>
      </li>
      <li>
          <Link to="/seafood">🥒Seafood</Link>
      </li>
    </ul>
  )
};

export default Categories;