import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import DashboardPage from "./components/DashboardPage";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
