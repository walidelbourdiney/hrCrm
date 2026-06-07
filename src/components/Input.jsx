function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error && touched ? "input error" : "input"}
      />

      {error && touched && <p className="error-text">{error}</p>}
    </div>
  );
}

export default Input;
