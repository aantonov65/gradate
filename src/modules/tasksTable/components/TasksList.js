import { Td, Tr } from "@chakra-ui/react";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../../config/firebase";
import { AuthContext } from "../../../context/AuthContext";

const TasksList = ({ dailyTasks, selectedCategories }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {dailyTasks
        .filter(
          (task) =>
            selectedCategories.length === 0 ||
            selectedCategories.includes(task.category)
        )
        .map((task) => (
          <Tr key={task.id}>
            <Td className="table__cell--task-name">
              {task.taskName.charAt(0).toUpperCase() + task.taskName.slice(1)}
            </Td>
            <Td>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Td>
            <Td>
              {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
            </Td>
            <Td
              className={
                task.status === "completed"
                  ? "table__task-status--completed"
                  : "table__task-status--pending"
              }>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </Td>
            <Td>
              <>
                <button
                  className={
                    task.status === "completed"
                      ? "table__complete-task table__disabled"
                      : "table__complete-task"
                  }
                  disabled={task.status === "completed"}
                  onClick={() => {
                    handleComplete(task.id, user);
                  }}>
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  className="table__delete-task"
                  onClick={() => {
                    handleDelete(task.id, user);
                  }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </>
            </Td>
          </Tr>
        ))}
    </>
  );
};

const handleDelete = async (id, user) => {
  try {
    await deleteDoc(doc(db, "tasks", user.uid, "userTasks", id));
  } catch (error) {
    console.log(error);
  }
};

const handleComplete = async (id, user) => {
  try {
    await updateDoc(doc(db, "tasks", user.uid, "userTasks", id), {
      status: "completed",
    });
  } catch (error) {
    console.log(error);
  }
};

export default TasksList;
