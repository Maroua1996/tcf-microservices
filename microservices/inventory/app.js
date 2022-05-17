const dotenv = require("dotenv");
[".env", ".env.local"].forEach((path) => dotenv.config({ path }));

const express = require("express");
const app = express();

const InventoryController = require("./controllers/Inventory");

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);


 app.use(
  
  require("./routes/Inventory")
 );

 module.exports = app; 