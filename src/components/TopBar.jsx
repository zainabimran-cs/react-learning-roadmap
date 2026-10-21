import { Link, useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-2 border-b border-gray-700 bg-gray-950 px-3 py-3 sm:px-6">

  <Link to="/"
    className="min-w-0 truncate text-lg font-bold text-white sm:text-2xl">
    React Learning Roadmap
  </Link>

  <button
    onClick={handleLogout}
    className="shrink-0 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 sm:px-4 sm:text-base">
    Logout
  </button>

</div>
  );
}

export default TopBar;