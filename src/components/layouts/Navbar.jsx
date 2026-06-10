import { useNavigate } from "react-router-dom";

import useAuthStore from "../../store/authStore";

function Navbar() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="navbar">
      <h2>Dashboard</h2>

      <div className="navbar-user">
        <span>{user?.name}</span>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
