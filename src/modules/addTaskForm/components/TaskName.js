import React from "react";

const TaskName = ({ formik }) => {
  return (
    <label className="task-form__label">
      Task Name
      <input
        className={
          formik.touched.taskName && formik.errors.taskName
            ? "task-form__input task-form__input--required"
            : "task-form__input "
        }
        type="text"
        id="taskName"
        name="taskName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.taskName}
      />
    </label>
  );
};

export default TaskName;
