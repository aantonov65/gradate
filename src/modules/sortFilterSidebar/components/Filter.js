import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faDollar,
  faHammer,
  faHeartCircleCheck,
  faHouseChimney,
  faPersonWalking,
} from "@fortawesome/free-solid-svg-icons";

const Filter = ({ selectedCategories, setSelectedCategories }) => {
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
      console.log(selectedCategories);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  const filters = [
    {
      label: "Personal Development",
      value: "development",
      icon: faPersonWalking,
    },
    {
      label: "Work/Professional",
      value: "work",
      icon: faHammer,
    },
    {
      label: "Household Chores",
      value: "chores",
      icon: faHouseChimney,
    },
    {
      label: "Finances",
      value: "finances",
      icon: faDollar,
    },
    {
      label: "Health",
      value: "health",
      icon: faHeartCircleCheck,
    },
    {
      label: "Misc",
      value: "misc",
      icon: faDice,
    },
  ];

  return (
    <div className="filter">
      <span className="filter__heading">Filter By Category</span>
      <div className="filter__container">
        {filters.map((filter) => {
          return (
            <div key={filter.value} className="filter__option">
              <label htmlFor={filter.value}>
                <FontAwesomeIcon icon={filter.icon} />
                {filter.label}
              </label>
              <input
                className="filter__checkbox"
                type="checkbox"
                id={filter.value}
                name={filter.value}
                value={filter.value}
                onChange={handleCategoryChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
