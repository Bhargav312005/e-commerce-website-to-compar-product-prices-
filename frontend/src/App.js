import React, { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feedback from "./components/Feedback";
import ProductResults from "./components/ProductResults";
import "./styles.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://127.0.0.1:5001/search?query=${query.trim()}`);
      if (!response.ok) throw new Error("Search request failed");
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <ProductResults results={searchResults} />
      </div>
    </Router>
  );
}

export default App;
