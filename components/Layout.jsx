import { Outlet, Link } from "react-router-dom";

// using w3school example to demo page links
const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="nav justify-content-center">
          <li className="Button">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/HotDrinks">Hotdrinks</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;