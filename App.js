import "./App.css";
import Heading from "./components/Heading";
import image from "./Images/login.png";
import pass from "./Images/password.png";
import HotDrinks from "./HotDrinks";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Page404 from './Page404'

const App = () => {
  console.log("React test msg");
  

  return (<>
      <Heading />
      <div className="main">
<div className="sub-main">
  <div>
    <div className="imgs">
      <div className="container-image">
        <img src={image} alt="profile" className="profile" />
      </div>
    </div>
    <div>
      <h1>Login Page</h1>
      <div>
        <input type="text" placeholder="user name" className="name" />
      </div>
      <div className="second-input">
        <img src={pass} alt="pass" className="email" />
        <input type="password" placeholder="password" className="name" />
      </div>
      <div className="login-button">
        <button>Login</button>
      </div>
    </div>
  </div>
</div>
</div>


<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="HotDrinks" element={<HotDrinks />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
        
    </BrowserRouter>


  </>)
}

export default App