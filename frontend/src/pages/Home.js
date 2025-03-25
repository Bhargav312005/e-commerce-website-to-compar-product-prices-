import React, { useState } from "react"; 
import ProductResults from "../components/ProductResults";
import SearchBar from "../components/SearchBar";
import "./Home.css";

const Home = () => {
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
    <div className="home">
      <h1>Welcome to E-Shop! Search for your favorite products.</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductResults results={searchResults} />
    </div>
  );
};

export default Home;
