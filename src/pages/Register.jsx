import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import registerSchema from "../validation/registerSchema";

import Input from "../components/Input";
import Button from "../components/Button";

function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input label="Full Name" name="name" />

            <Input label="Email" name="email" type="email" />

            <Input label="Password" name="password" type="password" />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <Button type="submit">Create Account</Button>
          </Form>
        </Formik>

        <p className="auth-link">
          Already have an account?
          <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
