import React, { useContext } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHome,
  faRightFromBracket,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <nav className="sidebar">
      <ul className="siderbar__list">
        <li className="sidebar__item sidebar__logo">
          <span>gradate</span>
        </li>
        {/* <li className="sidebar__item">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </NavLink>
        </li> */}
        {/* <li className="sidebar__item">
          <NavLink
            to="/daily-tasks"
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }>
            <FontAwesomeIcon icon={faSun} />
            <span>Daily Tasks</span>
          </NavLink>
        </li> */}
        {/* <li className="sidebar__item">
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }>
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Progress</span>
          </NavLink>
        </li> */}
        <li className="sidebar__item sidebar__sign-out">
          <button
            className="sidebar__btn"
            onClick={() => {
              handleSignOut();
            }}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
