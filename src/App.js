import "./App.css";
import Heading from "./components/Heading";
import HotDrinks from "./HotDrinks";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  console.log("React test msg");
  
  return (
    
    <>
    <HotDrinks/>
      <BrowserRouter>
        <Routes>
          <Route path="HotDrinks" element={<HotDrinks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
