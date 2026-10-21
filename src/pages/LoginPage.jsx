import { Navigate, useNavigate } from "react-router-dom";

// Login ke baghair baqi pages band karne ke liye
export function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Login page
function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-950">
      <button
        onClick={handleLogin}
        className="rounded bg-blue-500 px-8 py-2 text-white hover:bg-blue-600"
      >
        Login In
      </button>
    </div>
  );
}

export default LoginPage;