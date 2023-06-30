import React from "react";

const TaskPriority = ({ formik }) => {
  return (
    <label className="task-form__label">
      Priority
      <select
        className="task-form__input"
        id="priority"
        name="priority"
        onChange={formik.handleChange}
        value={formik.values.priority}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </label>
  );
};

export default TaskPriority;
