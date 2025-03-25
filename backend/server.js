const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

const products = {
  "iphone": {
    name: "iPhone 14",
    amazonPrice: "$799",
    flipkartPrice: "$779",
    amazon: "https://www.amazon.com/dp/B09G9HDhttps://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_2?crid=3DCEAAMNZARMD&dib=eyJ2IjoiMSJ9.kIAqc7rGrIQBMWHZaIbk6Ke8ZA1p-4tSxoBvm-c3si8UoQQzppzlUqqRYkguKxU69j-915JGh5ahdt62qqkb0v6m7w3WPFzwAT68VRms6GKCS4zaRxR1FVk-3l8uQRD7djV9cAXIEqZCf_HPjiMf28I5xCyka8UM5-NJfO4N26Dq85V4khiX26rN4YANAcsU-vNS12C6fgl92permiLG-TI_CkevH77a4Hyp_TGQS4Y.uzDkGL6H9UNsu5iqqGLTb7dQisDQfAi-2MvM8F6rXYE&dib_tag=se&keywords=iphone%2B14&qid=1742923882&sprefix=iphone%2B14%2Caps%2C226&sr=8-2&th=16https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_1_sspa?crid=34TG4OZHAQ4J0&dib=eyJ2IjoiMSJ9.dm62FKRWy1Pri6xMnce9ylAORT-uCdcfKE3FtSmrpd9oH1uxu4CHcrrANUoYjFmbhojjdMM9zKHTNfxg_HqQFKxp-cOtFgyUKsBrsJdj0Ay42SB8pT0QHOD2CrjWfIBh0HoV9i2hKaFIDuESzhdFbI-6El5vKBi5Rsr91ycCbDnX0tOR8Aac6g_fH_Sz_PmPdM9-3SmZ1y3aHPd5kZsAX97zTlOhbaaaaaaaaaaaaaaaaaaaaaaaaaaaAHpcIThQipzOIc.jzqzhYvafwMAP5SH-NG_XTRRRbM49GuIT9N-ejR3TmQ&dib_tag=se&keywords=iphone%2F14&qid=1742923702&sprefix=%2Caps%2C193&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1PD",
    flipkart: "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d"
  },
  "samsung": {
    name: "Samsung Galaxy S23",
    amazonPrice: "$899",
    flipkartPrice: "$870",
    amazon: "https://www.amazon.com/dp/B0Bhthttps://www.amazon.in/SAMSUNG-Galaxy-S23-Graphite-Storage/dp/B0CJXQX3MB/ref=sr_1_4?crid=19P5PLNXX9309&dib=eyJ2IjoiMSJ9.3HiPFGG_dkh1HF-26koLzvlYHyPHz32HzfGxDcTNZfFt7KCUydGAP05uVWNcXeqLwnLZJkV54rTwhv-4Q4lDCRBJwXsY_JCpR7Q_acq0Q77TE-z--2mtx3n3Z-utUjzmwfuoe5RqkCmSeQyV_5rOLNFQLb8eDc4gH4SFxoXErEy4iQZ27S87uf4WzHKUD9lcbIHcF9eL2oMCeNnhsCJRV9Sfj6lyZFyNu9-zY9fArc8.inpgUEbHRfnfsjpr9ZWVvv62kDX1LxpyQbV7tAnW6AE&dib_tag=se&keywords=samsung%2Bgalaxy%2Bs23&nsdOptOutParam=true&qid=1742923744&sprefix=samsung%2Bgalaxy%2Bs2%2Caps%2C216&sr=8-4&th=1tps://www.amazon.in/SAMSUNG-Galaxy-S23-Graphite-Storage/dp/B0CJXQX3MB/ref=sr_1_4?crid=19P5PLNXX9309&dib=eyJ2IjoiMSJ9.3HiPFGG_dkh1HF-26koLzvlYHyPHz32HzfGxDcTNZfFt7KCUydGAP05uVWNcXeqLwnLZJkV54rTwhv-4Q4lDCRBJwXsY_JCpR7Q_acq0Q77TE-z--2mtx3n3Z-utUjzmwfuoe5RqkCmSeQyV_5rOLNFQLb8eDc4gH4SFxoXErEy4iQZ27S87uf4WzHKUD9lcbIHcF9eL2oMCeNnhsCJRV9Sfj6lyZFyNu9-zY9fArc8.inpgUEbHRfnfsjpr9ZWVvv62kDX1LxpyQbV7tAnW6AE&dib_tag=se&keywords=samsung+galaxy+s23&nsdOptOutParam=true&qid=1742923744&sprefix=samsung+galaxy+s2%2Caps%2C216&sr=8-4V3BVY5S",
    flipkart: "https://www.flipkart.com/samsung-galaxy-s2https://www.flipkart.com/samsung-galaxy-s23-5g-green-256-gb/p/itm7cdd081996dc8?pid=MOBGMFFXB7RGPNET&lid=LSTMOBGMFFXB7RGPNETJZGNDL&marketplace=FLIPKART&q=Samsung+Galaxy+S23&store=tyy%2F4io&spotlightTagId=default_FkPickId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=d607c886-46ba-45bc-9c15-2c7ba187fad5.MOBGMFFXB7RGPNET.SEARCH&ppt=sp&ppn=sp&ssid=5otfs6rylc0000001742923592881&qH=1fe033b290fff2a33"
  }
};

app.get("/search", (req, res) => {
  const query = req.query.query.toLowerCase().trim();
  if (products[query]) {
    res.json([products[query]]);
  } else {
    res.json([]);
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
