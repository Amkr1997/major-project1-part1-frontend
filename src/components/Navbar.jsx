import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <NavLink
          className="navbar-brand text-info-emphasis fs-4 fw-medium"
          to={"/"}
        >
          BookStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link fs-5 fw-medium"
                aria-current="page"
                to={"/books"}
              >
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5 fw-medium px-md-4" to={"/cart"}>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
