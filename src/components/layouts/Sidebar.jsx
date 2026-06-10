import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">SmartHR</div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/employees">Employees</NavLink>

        <NavLink to="/departments">Departments</NavLink>

        <NavLink to="/attendance">Attendance</NavLink>

        <NavLink to="/payroll">Payroll</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
