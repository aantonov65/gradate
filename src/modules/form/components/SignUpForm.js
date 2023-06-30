import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import validateRegister from "../utils/validateRegister";
import Input from "./Input";
import { auth } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import GoogleSignUpButton from "./GoogleSignUpButton";
import PasswordInput from "./PasswordInput";

const SignUpForm = () => {
  const [isTyping, setIsTyping] = useState(false); // Show password requirements when user starts typing
  const [isEmailAlreadyUsed, setIsEmailAlreadyUsed] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (email, password, setIsEmailAlreadyUsed) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/daily-tasks");
      })
      .catch((err) => {
        if (
          err instanceof FirebaseError &&
          err.code === "auth/email-already-in-use"
        ) {
          setIsEmailAlreadyUsed(true);
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate: validateRegister,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleSignUp(values.email, values.password, setIsEmailAlreadyUsed);
      resetForm({
        values: {
          email: values.email,
          password: "",
          repeatPassword: "",
        },
      });
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <Input name="email" type="email" text="Email" formik={formik} />
      {isEmailAlreadyUsed ? (
        <span className="form__message form__message--error">
          This email has already been used
        </span>
      ) : null}
      <PasswordInput
        formik={formik}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />
      <Input
        name="repeatPassword"
        type="password"
        text="Repeat Password"
        formik={formik}
      />
      <input className="form__submit" type="submit" value="Sign Up" />
      <GoogleSignUpButton />
    </form>
  );
};

export default SignUpForm;
