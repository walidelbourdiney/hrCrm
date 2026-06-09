import useAuthStore from "../store/authStore";

function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <h1>Dashboard</h1>

      <p>Welcome {user?.name}</p>
    </>
  );
}

export default Dashboard;
