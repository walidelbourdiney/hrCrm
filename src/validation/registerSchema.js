import * as Yup from "yup";

const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password required"),
});

export default registerSchema;
