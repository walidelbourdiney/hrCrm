function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-card">
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
