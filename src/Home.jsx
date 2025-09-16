import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer"; 
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); 

  // Get cart for the logged-in user
  const cart = currentUser ? JSON.parse(localStorage.getItem(`cart_${currentUser.username}`)) || [] : [];

  const handleExplore = () => {
    if (loggedIn === "true") {
      navigate("/products");
    } else {
      alert("Please login first to explore products.");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    alert("You have logged out.");
    navigate("/");
  };

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Sinha Interprises Pvt. Ltd
          <img
            src="https://www.bing.com/th/id/OIP.uqnxKd0bgWG9dJ2_TVPJsQHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Company Logo"
            className="logo-img"
          />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* Show personalized greeting and cart count */}
          {loggedIn === "true" && currentUser && (
            <li className="user-name">
              Hello, {currentUser.username} {cart.length > 0 && `(Cart: ${cart.length})`}
            </li>
          )}

          {loggedIn === "true" ? (
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="login-btn">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <header className="hero">
          <div className="hero-content">
            <h1>Your Trusted AutoParts Marketplace</h1>
            <p>
              Quality spare parts for every vehicle. Affordable, reliable, and
              trending with the latest auto technologies.
            </p>
            <button onClick={handleExplore} className="cta-btn">
              Explore Products
            </button>
          </div>
        </header>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
