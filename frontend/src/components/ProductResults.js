import React from "react"; 
import "./ProductResults.css";

const ProductResults = ({ results }) => {
  return (
    <div className="product-results">
      {results.length === 0 ? (
        <p>No products found.</p>
      ) : (
        results.map((product, index) => (
          <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Amazon Price:</strong> {product.amazonPrice}</p>
            <p><strong>Flipkart Price:</strong> {product.flipkartPrice}</p>
            <div className="buttons">
              <a href={product.amazon} target="_blank" rel="noopener noreferrer" className="buy-btn amazon">
                Buy on Amazon
              </a>
              <a href={product.flipkart} target="_blank" rel="noopener noreferrer" className="buy-btn flipkart">
                Buy on Flipkart
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductResults;
