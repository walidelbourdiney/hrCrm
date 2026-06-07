import { Link } from "react-router-dom";
import { useFormik } from "formik";

import loginSchema from "../validation/loginSchema";

import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign In</h1>

        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <Button type="submit">Sign In</Button>
        </form>

        <p className="auth-link">
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
