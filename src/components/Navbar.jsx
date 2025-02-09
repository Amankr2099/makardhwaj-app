import { Link } from "react-router-dom";

// Navbar Component
export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          Makardhwaj
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#motivation">Motivation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#achievement">Achievements</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                Products
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={'/product-aham'}>Wheelchair Height Adjustability (AHAM) </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-us">Contact Us</a>
            </li>
            {/* Login Button */}
            <li className="nav-item" >
              <Link to={'/login'} className="btn nav-link login-button active">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  };