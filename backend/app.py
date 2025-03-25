from flask import Flask, request, jsonify
import torch
from torchvision import transforms
from PIL import Image
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

# Dummy model function (Replace with actual deep learning model)
def predict_product(image_path):
    return "Nike Shoes"  # Example prediction (Replace with actual model logic)

# Web Scraping Function (Amazon & Flipkart)
def search_product_online(product_name):
    search_results = []

    amazon_url = f"https://www.amazon.com/s?k={product_name.replace(' ', '+')}"
    search_results.append({"site": "Amazon", "url": amazon_url})

    flipkart_url = f"https://www.flipkart.com/search?q={product_name.replace(' ', '%20')}"
    search_results.append({"site": "Flipkart", "url": flipkart_url})

    return search_results

@app.route('/search', methods=['POST'])
def search():
    file = request.files.get('file')
    product_name = request.form.get('product_name')

    if file:
        image_path = "uploaded_image.jpg"
        file.save(image_path)
        product_name = predict_product(image_path)

    if not product_name:
        return jsonify({"error": "No product name provided"}), 400

    search_results = search_product_online(product_name)
    return jsonify({"product": product_name, "results": search_results})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
