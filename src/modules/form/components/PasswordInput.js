import React from "react";
import PasswordRequirements from "./PasswordRequirements";

const PasswordInput = ({ formik, isTyping, setIsTyping }) => {
  return (
    <>
      <label className="form__label" htmlFor="password">
        Password
      </label>
      <input
        className="form__input"
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        onFocus={() => setIsTyping(true)}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <span className="form__message">{formik.errors.password}</span>
      ) : null}
      <PasswordRequirements formik={formik} isTyping={isTyping} />
    </>
  );
};

export default PasswordInput;
