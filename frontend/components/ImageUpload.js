import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [results, setResults] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearch = async () => {
    if (!image && !productName) {
      return alert("Please upload an image or enter a product name!");
    }

    const formData = new FormData();
    if (image) formData.append("file", image);
    formData.append("product_name", productName);

    const response = await fetch("http://127.0.0.1:5001/search", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <h2>Search for a Product</h2>
      <input
        type="text"
        placeholder="Enter product name (optional)"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSearch}>Search Product</button>

      <h3>Search Results:</h3>
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.site}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUpload;
