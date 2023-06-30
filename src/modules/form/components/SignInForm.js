import React, { useContext, useState } from "react";
import Input from "./Input";
import GoogleSignUpButton from "./GoogleSignUpButton";
import { useFormik } from "formik";
import validateLogin from "../utils/validateLogin";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../../context/AuthContext";

const SignInForm = () => {
  const [loginError, setLoginError] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (email, password, setLoginError) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/daily-tasks");
      })
      .catch((err) => {
        if (
          err instanceof FirebaseError &&
          (err.code === "auth/wrong-password" ||
            err.code === "auth/invalid-email")
        ) {
          setLoginError("Invalid email or password");
          console.error(err);
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setLoginError("Invalid email or password");
        } else {
          setLoginError("Unexpected error. Try again later :(");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
    onSubmit: (values, { resetForm }) => {
      handleSignIn(values.email, values.password, setLoginError);
      resetForm({ values: "" });
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <Input name="email" type="text" text="Email" formik={formik} />
      <Input name="password" type="password" text="Password" formik={formik} />
      {loginError ? (
        <span className="form__message--error">{loginError}</span>
      ) : null}
      <input className="form__submit" type="submit" value="Sign In" />
      <GoogleSignUpButton />
    </form>
  );
};

export default SignInForm;
