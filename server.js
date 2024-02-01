const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const app = express();
connectDb();

app.use(express.json());
app.use(errorHandler);

const port = process.env.PORT;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
