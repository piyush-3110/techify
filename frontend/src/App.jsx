import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "../src/Components/Home/Home";
import About from "../src/Components/About/About";
import Navbar from "./Components/Home/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
