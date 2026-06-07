import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import loginSchema from "../validation/loginSchema";

import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Sign In</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input label="Email" name="email" type="email" />

            <Input label="Password" name="password" type="password" />

            <Button type="submit">Sign In</Button>
          </Form>
        </Formik>

        <p className="auth-link">
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
