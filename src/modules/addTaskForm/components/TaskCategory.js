import React from "react";

const TaskCategory = ({ formik }) => {
  return (
    <label className="task-form__label">
      Category
      <select
        className="task-form__input"
        id="category"
        name="category"
        onChange={formik.handleChange}
        value={formik.values.category}>
        <option value="development">Personal Development</option>
        <option value="work">Work/Professional</option>
        <option value="chores">Household Chores</option>
        <option value="finances">Finances</option>
        <option value="health">Health</option>
        <option value="misc">Misc</option>
      </select>
    </label>
  );
};

export default TaskCategory;
