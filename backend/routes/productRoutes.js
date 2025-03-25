const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
    const formData = new FormData();
    formData.append("image", req.file.buffer, "image.jpg");

    const { data } = await axios.post("http://localhost:5001/predict", formData);
    res.json(data);
});

module.exports = router;
