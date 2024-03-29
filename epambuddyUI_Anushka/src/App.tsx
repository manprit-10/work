import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/search/SearchResults";
import EmployeeBenefits from "./pages/tabs/employee/benefits/EmployeeBenefits";
import NavBar from "./components/navbar/NavBar";

import "./App.css";
// import "@epam/uui-components/styles.css";
import SideBar from "./components/sidebar/SideBar";
import { MainRoutes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="wrapper">
          <SideBar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
<<<<<<< HEAD
              <Route
                path="/search/:searchedTopic"
                element={<SearchResults />}
              />
=======
              <Route path="/search" element={<SearchResults />} />
>>>>>>> b20e0a18bcc52387efe78b4ce63d42e56f2bc930
              <Route
                path="/employee/benefits/*"
                element={<EmployeeBenefits />}
              />
            </Routes>
            <MainRoutes />
          </div>
          <div className="extra-space"></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
