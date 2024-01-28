import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../src/Components/Home/Home";
import About from "../src/Components/About/About";
import Navbar from "./Components/Home/Navbar";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
