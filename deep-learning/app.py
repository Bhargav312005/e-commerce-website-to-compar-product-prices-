from flask import Flask, request, jsonify
from model import predict_product
from predict import get_price_from_amazon

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    image = request.files["image"]
    image_path = "temp.jpg"
    image.save(image_path)

    product_name = predict_product(image_path)
    prices = get_price_from_amazon(product_name)

    return jsonify({"product": product_name, "prices": prices})

if __name__ == "__main__":
    
    app.run(port=5001)
