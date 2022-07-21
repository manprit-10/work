import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import SearchResults from "./pages/search/SearchResults";
import EmployeeBenefits from "./pages/tabs/employee/benefits/EmployeeBenefits";
import NavBar from "./components/navbar/NavBar";

import "./App.css";
import "@epam/uui-components/styles.css";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="wrapper">
          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/employee/benefits" element={<EmployeeBenefits />} />
          </Routes>
          <div className="extra-space"></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
