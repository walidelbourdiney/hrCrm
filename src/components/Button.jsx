function Button({
  type = "button",
  children,
  disabled = false,
  loading = false,
}) {
  return (
    <button type={type} disabled={disabled || loading} className="btn">
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;
