import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1e3a8a",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Logo */}
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
        Auto<span style={{ color: "#facc15" }}>Sphere</span> 🚗
      </h1>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "20px", fontSize: "1.1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
