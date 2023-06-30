import React from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import TaskName from "./components/TaskName";
import TaskPriority from "./components/TaskPriority";
import TaskCategory from "./components/TaskCategory";
import "./addTaskForm.css";

const AddTaskForm = () => {
  const formik = useFormik({
    initialValues: {
      taskName: "",
      priority: "high",
      category: "development",
      status: "pending",
    },
    validate: validateTask,
    onSubmit: async (values) => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userTasksRef = collection(
            db,
            "tasks",
            currentUser.uid,
            "userTasks"
          );

          const taskData = {
            taskName: values.taskName,
            priority: values.priority,
            category: values.category,
            status: values.status,
          };

          await addDoc(userTasksRef, taskData);
          formik.resetForm();
        }
      } catch (error) {
        console.error("Error creating task:", error);
      }
    },
  });

  return (
    <div className="task-form__container">
      <form className="task-form" onSubmit={formik.handleSubmit}>
        <TaskName formik={formik} />
        <TaskPriority formik={formik} />
        <TaskCategory formik={formik} />
        <button className="task-form__submit" type="submit">
          <FontAwesomeIcon icon={faPlus} />
          Add Task
        </button>
      </form>
    </div>
  );
};

const validateTask = (values) => {
  const errors = {};
  if (!values.taskName) {
    errors.taskName = "Required";
  } else if (values.taskName.length > 50) {
    errors.taskName = "Task name must be 50 characters or less";
  }

  return errors;
};

export default AddTaskForm;
