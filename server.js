const express = require("express");
const errorHandler = require("./middleware/error-handler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDb();
const app = express();
app.use(express.json());
app.use("/api/contacts", require("./routes/contact-routes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port :${port}`);
});
