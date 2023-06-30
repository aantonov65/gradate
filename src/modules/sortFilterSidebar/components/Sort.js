const Sort = ({ dailyTasks, setDailyTasks }) => {
  const handleSort = (e) => {
    const selectedSort = e.target.value;
    const sortedTasks = [...dailyTasks].sort((a, b) => {
      let priorityOrder = {};
      if (selectedSort === "low") {
        priorityOrder = { low: 1, medium: 2, high: 3 };
      } else if (selectedSort === "medium") {
        priorityOrder = { medium: 1, high: 2, low: 3 };
      } else {
        priorityOrder = { high: 1, medium: 2, low: 3 };
      }
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    setDailyTasks(sortedTasks);
  };

  return (
    <div className="sort">
      <span className="sort__heading">Sort By Priority</span>
      <div className="sort__option sort__option--high">
        <span>High</span>
        <input
          className="sort__radio"
          type="radio"
          id="priority-high"
          name="priority"
          value="high"
          onChange={(e) => {
            handleSort(e);
          }}
        />
      </div>
      <div className="sort__option sort__option--medium">
        <span>Medium</span>
        <input
          className="sort__radio"
          type="radio"
          id="priority-medium"
          name="priority"
          value="medium"
          onChange={(e) => {
            handleSort(e);
          }}
        />
      </div>
      <div className="sort__option sort__option--low">
        <span>Low</span>
        <input
          className="sort__radio"
          type="radio"
          id="priority-low"
          name="priority"
          value="low"
          onChange={(e) => {
            handleSort(e);
          }}
        />
      </div>
    </div>
  );
};

export default Sort;
