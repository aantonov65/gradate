import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Landing from "./pages/landing/Landing";
import DailyTasks from "./pages/dailyTasks/DailyTasks";
import Sidebar from "./modules/sidebar/Sidebar";
import "./App.css";

function App() {
  const { user } = useContext(AuthContext);

  const IsAuth = ({ children }) => {
    return user ? children : <Navigate to={"/"} />;
  };

  const IsNotAuth = ({ children }) => {
    return !user ? children : <Navigate to={"/home"} />;
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <IsNotAuth>
              <Landing />
            </IsNotAuth>
          }
        />
        <Route
          path="/daily-tasks"
          element={
            <IsAuth>
              <Sidebar />
              <DailyTasks />
            </IsAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
