function Button({ type = "button", children, disabled = false }) {
  return (
    <button type={type} disabled={disabled} className="btn">
      {children}
    </button>
  );
}

export default Button;
