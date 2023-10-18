const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongodb connection success!");
});

const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");



app.use("/User",userRouter);
app.use("./Product",productRouter);

app.listen(PORT,()=> {
    console.log(`Server is up and running on port number ${PORT}`);
});

