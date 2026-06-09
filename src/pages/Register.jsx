import { Link, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

import registerSchema from "../validation/registerSchema";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import AuthLayout from "../components/AuthLayout";

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    navigate("/");
    console.log("User Registered");
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join us today">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await handleSubmit(values);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <Form>
            <Input label="Full Name" name="name" />

            <Input label="Email" name="email" type="email" />

            <Input label="Password" name="password" type="password" />

            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <Button type="submit" loading={formik.isSubmitting}>
              Create Account
            </Button>
          </Form>
        )}
      </Formik>

      <p className="auth-link">
        Already have an account?
        <Link to="/">Sign In</Link>
      </p>
    </AuthLayout>
  );
}

export default Register;
