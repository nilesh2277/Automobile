import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cart, setCart] = useState([]);

  // Load cart from localStorage for the logged-in user
  useEffect(() => {
    if (currentUser) {
      const savedCart = JSON.parse(localStorage.getItem(`cart_${currentUser.username}`)) || [];
      setCart(savedCart);
    }
  }, [currentUser]);

  const products = [
    { id: 1, name: "Clutch Plate", price: 2500, img: "https://www.bing.com/th/id/OIP.Dgh35c8mpqjHSBxJd_UNWgHaE8?w=292&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 2, name: "Bearings", price: 1200, img: "https://www.bing.com/th/id/OIP.OIiGGFOL7AOWBkCx0Niw-wHaEJ?w=243&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
    { id: 3, name: "Patti", price: 400, img: "https://tiimg.tistatic.com/fp/1/007/606/stainless-steel-patti-for-automobile-industry-silver-color-5-mm-to-25-mm-thickness-750.jpg" },
    { id: 4, name: "Nut & Bolt Set", price: 250, img: "https://tse3.mm.bing.net/th/id/OIP.dN2u-skVUm_xP9LxGjHCuAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
    { id: 5, name: "Bush", price: 600, img: "https://tse4.mm.bing.net/th/id/OIP.nIFvRI5sfAV2UBND1w7H7gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3" },
    { id: 6, name: "Brake Shoe", price: 1800, img: "https://www.bing.com/th/id/OIP.pg4U05oA5_iwcMQHA_BJgQHaEv?w=267&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  ];

  const addToCart = (product) => {
    if (!loggedIn || !currentUser) {
      alert("Please login to add products to cart.");
      navigate("/login");
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(updatedCart));
    alert(`${product.name} added to cart.`);
  };

  const goToCheckout = () => {
    if (!loggedIn || !currentUser) {
      alert("Please login to proceed to checkout.");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty! Add products first.");
      return;
    }

    navigate("/checkout"); // Redirect to checkout page automatically
  };

  return (
    <div className="products-page">
      <h1>Trending AutoParts</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-img">
              <img src={p.img} alt={p.name} />
              <div className="product-overlay">
                <p className="price">₹{p.price}</p>
              </div>
            </div>
            <h3>{p.name}</h3>
            <button onClick={() => addToCart(p)} className="add-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <button onClick={goToCheckout} className="checkout-btn">
          Go to Checkout ({cart.length})
        </button>
      </div>
    </div>
  );
}

export default Products;
