import { Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Input({ label, name, type = "text", placeholder = "" }) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="input-wrapper">
        <Field
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          className="input"
        />

        {type === "password" && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      <ErrorMessage name={name} component="p" className="error-text" />
    </div>
  );
}

export default Input;
