const validateRegister = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/.test(values.password)) {
    errors.password = "Missing a requirement";
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = "Repeat password is required";
  } else if (values.repeatPassword !== values.password) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
};

export default validateRegister;
