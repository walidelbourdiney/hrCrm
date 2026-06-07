import { Field, ErrorMessage } from "formik";

function Input({ label, name, type = "text", placeholder = "" }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input"
      />

      <ErrorMessage name={name} component="p" className="error-text" />
    </div>
  );
}

export default Input;
