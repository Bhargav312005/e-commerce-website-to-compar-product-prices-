import torch
import torchvision.transforms as transforms
from PIL import Image

# Load a pre-trained ResNet model for image classification
model = torch.hub.load('pytorch/vision:v0.10.0', 'resnet18', pretrained=True)
model.eval()

# Function to process and predict product category
def predict_product(image_path):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor()
    ])
    image = Image.open(image_path)
    image = transform(image).unsqueeze(0)

    with torch.no_grad():
        outputs = model(image)
    
    _, predicted = outputs.max(1)
    return predicted.item()  # Returns the predicted category ID
