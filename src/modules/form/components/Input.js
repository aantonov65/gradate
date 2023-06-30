import React from "react";

const Input = ({ name, type, text, formik }) => {
  return (
    <>
      <label className="form__label" htmlFor={name}>
        {text}
      </label>
      <input
        className="form__input"
        type={type}
        name={name}
        id={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <span className="form__message">{formik.errors[name]}</span>
      ) : null}
    </>
  );
};

export default Input;
