import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn !== "true") {
    alert("Please login first to access this page.");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
