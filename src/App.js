import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Services from "./components/Services";
import DashboardPage from "./components/DashboardPage";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";

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
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </Router>
  );
}

export default App;
