require("dotenv").config()
const express = require("express");
const app = express();
const Router = require("./routes/router")

const port = process.env.PORT || 6000
app.use(express.json())
app.use("/", Router)


app.listen(port, ()=>{
    console.log("connected to server ", port)
})