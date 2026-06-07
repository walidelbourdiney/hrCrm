import logo from "../assets/logo-dark.png";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-logo">
            <img src={logo} alt="SmartHR Logo" />
          </div>

          <h2 className="auth-company">SmartHR</h2>

          <p className="auth-tagline">Workforce Management System</p>
        </div>

        <div className="auth-header">
          <h1>{title}</h1>

          {subtitle && <p>{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
