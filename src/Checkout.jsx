import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [cart, setCart] = useState([]);
  const [name, setName] = useState(currentUser?.username || "");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Load cart from localStorage
  useEffect(() => {
    if (currentUser) {
      const savedCart = JSON.parse(localStorage.getItem(`cart_${currentUser.username}`)) || [];
      setCart(savedCart);
    }
  }, [currentUser]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!name || !address) {
      alert("Please fill in all fields.");
      return;
    }

    // Clear cart after payment
    localStorage.removeItem(`cart_${currentUser.username}`);
    setCart([]);

    alert(`Payment successful! Thank you, ${name}. Your order has been placed.`);
    navigate("/"); // Redirect to Home page after order
  };

  if (!currentUser) {
    alert("Please login to checkout.");
    navigate("/login");
    return null;
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-container">

        {/* Cart Section */}
        <div className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <h3>Total: ₹{totalPrice}</h3>
        </div>

        {/* Payment Section */}
        <div className="payment-section">
          <h2>Payment Details</h2>
          <form onSubmit={handlePayment}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label>
              Address:
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>

            <label>
              Payment Method:
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="card">Card</option>
                <option value="upi">UPI</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </label>

            <button type="submit" className="pay-btn">
              Pay ₹{totalPrice}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;
