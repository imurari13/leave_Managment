const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(

    "/api/auth",

    require("./routes/authRoutes")

);

app.use(

    "/api/leave",

    require("./routes/leaveRoutes")

);

app.get("/", (req,res)=>{

    res.send("Server Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(`Server Started on ${PORT}`);

});