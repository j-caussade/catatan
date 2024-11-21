require("dotenv").config({path: "config.env"})

const express = require("express");
const app = express();

const router = require("./route/route");

app.use("/", router);
app.use(express.static("public"));
app.set("view engine", "ejs");

const hostname = "localhost";
const PORT = process.env.PORT;

app.listen(PORT, hostname, () => {
    console.log(`Server run on http://${hostname}:${PORT}`);
});