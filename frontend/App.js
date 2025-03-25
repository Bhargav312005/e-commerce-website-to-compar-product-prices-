import React, { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSearch = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("productName", productName);

    const response = await fetch("http://localhost:5000/search", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResults(data);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Product Search</h1>
      
      {/* Search Bar for Text Input */}
      <input 
        type="text" 
        placeholder="Enter product name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      
      {/* Image Upload Input */}
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>

      {/* Display Results */}
      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {results.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ₹{item.price}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Buy Now</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
