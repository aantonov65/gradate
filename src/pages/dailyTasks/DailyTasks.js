import React, { useContext, useEffect, useState } from "react";
import "./dailyTasks.css";
import AddTaskForm from "../../modules/addTaskForm/AddTaskForm";
import SortFilterSidebar from "../../modules/sortFilterSidebar/SortFilterSidebar";
import TasksTable from "../../modules/tasksTable/TasksTable";
import { AuthContext } from "../../context/AuthContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

const DailyTasks = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      const userTasksRef = collection(db, "tasks", user.uid, "userTasks");
      const unsubscribe = onSnapshot(userTasksRef, (snapshot) => {
        const tasks = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        setDailyTasks(tasks);
      });

      return () => unsubscribe();
    }
  }, [user]);

  console.log(dailyTasks);

  return (
    <div className="daily-tasks">
      <div className="daily-tasks__container">
        <SortFilterSidebar
          dailyTasks={dailyTasks}
          setDailyTasks={setDailyTasks}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="daily-tasks__tasks">
          <AddTaskForm />
          <TasksTable
            dailyTasks={dailyTasks}
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyTasks;
