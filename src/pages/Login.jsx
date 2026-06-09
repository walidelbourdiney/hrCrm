import { Link, useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";

import loginSchema from "../validation/loginSchema";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import AuthLayout from "../components/AuthLayout";
// import useAuthStore from "../store/authStore";
import useAuthStore from "../store/authStore";

function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setAuth({
      user: {
        id: 1,
        name: "Demo User",
        email: values.email,
        role: "admin",
      },

      token: "fake-jwt-token",
    });

    navigate("/dashboard");
    console.log("User Logged In");
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to continue">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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
            <Input label="Email" name="email" type="email" />

            <Input label="Password" name="password" type="password" />

            <Button type="submit" loading={formik.isSubmitting}>
              Sign In
            </Button>
          </Form>
        )}
      </Formik>

      <p className="auth-link">
        Don't have an account?
        <Link to="/register">Register</Link>
      </p>
    </AuthLayout>
  );
}

export default Login;
