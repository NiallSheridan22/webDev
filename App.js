
 // Tell webpack this JS file uses this image
 import logo from './logo.png';
 
//  import Card from "./Card"
import './App.css';
import Heading from "./Heading"


const App = () => {
  console.log("React test msg");
  
  
  let favouriteNum = Math.floor(Math.random() * 100) + 1
  let today = new Date().getDay()
  

  return (<>
   <Heading />
    <h2>test2 { today === 0 ? "Sunday" : "other day" }</h2>
    <h3 style={{border:"solid", width:"200px", color:"red"}}>my favourite number =  {favouriteNum}</h3>
    <img src={logo} alt="Logo" />
   
  </>)
}

export default App