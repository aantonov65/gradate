import React, { useState } from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

const Form = () => {
  const [form, setForm] = useState("register");

  const changeForm = (form) => {
    setForm(form);
  };

  return (
    <div
      className={
        form === "register"
          ? "form__container"
          : "form__container form__container--login"
      }>
      {form === "register" ? (
        <p className="form__heading">Start Shading</p>
      ) : (
        <p className="form__heading">Continue Shading</p>
      )}
      {form === "register" ? (
        <>
          <SignUpForm />
          <p className="form__change-form">
            Already have an account?
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              onClick={() => {
                changeForm("login");
              }}
            />
          </p>
        </>
      ) : (
        <>
          <SignInForm />
          <p className="form__change-form">
            Don't have an account?
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              onClick={() => {
                changeForm("register");
              }}
            />
          </p>
        </>
      )}
    </div>
  );
};

export default Form;
