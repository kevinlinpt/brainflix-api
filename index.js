const express = require('express')
const app = express()
const fs = require("fs"); // to help serve a local video file
const videoRoutes = require("./routes/videos");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//pull
const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

// Middleware to give us access to req.body (IMPORTANT!!!);
app.use(express.json());

// Middleware to serve up static files
app.use(express.static("public"));


//endpoint
app.use("/videos", videoRoutes);


app.listen(8080, () => {
    console.log("Server is up and running on port 8080! 🚀")
})
