import React from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import "./sortFilterSidebar.css";

const SortFilterSidebar = ({
  selectedCategories,
  setSelectedCategories,
  dailyTasks,
  setDailyTasks,
}) => {
  return (
    <div className="sort-filter-sidebar">
      <Sort dailyTasks={dailyTasks} setDailyTasks={setDailyTasks} />
      <Filter
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
};

export default SortFilterSidebar;
