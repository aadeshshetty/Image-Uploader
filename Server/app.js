const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

const uploadRouter = require("./routes/upload.routes");
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());
app.use("/", uploadRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
