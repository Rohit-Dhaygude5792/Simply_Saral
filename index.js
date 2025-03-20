const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const ejsMate = require("ejs-mate"); 
const farmer_Schemes_Model=require("./model/farmer_Schemes_Model.js");   
const women_Wel_Model=require("./model/women_Welf_Model.js");

app.engine("ejs", ejsMate); 
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const port = 4000;
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/PBL_DOCUMENTS");
}

main()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));


app.get("/", (req, res) => {
    res.render("./pages/home.ejs");
});

app.get("/login", (req, res) => {
    res.render("./pages/login.ejs");
});

app.get("/schemes/:scheme",async (req,res)=>{
   let {scheme}=req.params;
   console.log(scheme);
   if(scheme=="farmer_Welfare"){
        const data=await farmer_Schemes_Model.find({});
        const name="Agriculture";
        res.render("./pages/farm_Scheme",{data,name});
   }
   else if(scheme=="women_Welfare"){
    const data=await women_Wel_Model.find({});
    const name="Women-welfare";
    res.render("./pages/women_Scheme",{data,name});
   }
   else{
    res.send("Error ");
   }
});

app.get("/schemes",async (req, res) => {
    const KCC=await farmer_Schemes_Model.findOne({ title: "Kisan Credit Card (KCC) Scheme – A Comprehensive Guide"})
    console.log(KCC.title);
    res.render("./listings/Scheme.ejs",{KCC});
});



app.post("/login", (req, res) => {
    let {username,password}=req.body;
    console.log(username,password);
    res.send("Successfully login");
});

app.listen(process.env.port, () => {
    console.log(`Server running on port ${port}`);
});
