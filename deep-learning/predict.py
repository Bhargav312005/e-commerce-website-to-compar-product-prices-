import requests
from bs4 import BeautifulSoup

# Function to scrape product prices from Amazon
def get_price_from_amazon(product_name):
    headers = {"User-Agent": "Mozilla/5.0"}
    url = f"https://www.amazon.com/s?k={product_name.replace(' ', '+')}"
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    prices = []
    for price in soup.select(".a-price-whole"):
        prices.append(price.get_text())

    return prices[:3]  # Return the first 3 prices found
