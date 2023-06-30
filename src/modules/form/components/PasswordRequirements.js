import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PasswordRequirements = ({ formik, isTyping }) => {
  return (
    <>
      {formik.touched.password || isTyping ? (
        <div className="form__password-requirements">
          <span
            className={
              formik.values.password.match(/[a-z]/)
                ? "form__message form__message--no-margin form__message--completed"
                : "form__message form__message--no-margin"
            }>
            <FontAwesomeIcon icon={faCheck} /> lowercase letter
          </span>
          <span
            className={
              formik.values.password.match(/[A-Z]/)
                ? "form__message form__message--no-margin form__message--completed"
                : "form__message form__message--no-margin"
            }>
            <FontAwesomeIcon icon={faCheck} /> uppercase letter
          </span>
          <span
            className={
              formik.values.password.match(/\d/)
                ? "form__message form__message--no-margin form__message--completed"
                : "form__message form__message--no-margin"
            }>
            <FontAwesomeIcon icon={faCheck} /> digit
          </span>
          <span
            className={
              formik.values.password.length >= 8 &&
              formik.values.password.length <= 20
                ? "form__message form__message--no-margin form__message--completed"
                : "form__message form__message--no-margin"
            }>
            <FontAwesomeIcon icon={faCheck} /> 8 characters long
          </span>
        </div>
      ) : null}
    </>
  );
};

export default PasswordRequirements;
