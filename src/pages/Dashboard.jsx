import useAuthStore from "../store/authStore";

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>

      <p>Welcome {user?.name}</p>
    </div>
  );
}

export default Dashboard;
