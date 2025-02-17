const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const ejsMate = require("ejs-mate"); 

app.engine("ejs", ejsMate); 
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/PBL_DOCUMENTS");
}

main()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));


app.get("/", (req, res) => {
    res.render("./listings/Home.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
