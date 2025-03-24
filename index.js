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
        const name="Farmer's Welfare Scheme";
        res.render("./pages/farm_Scheme.ejs",{data,name});
   }
   else if(scheme=="women_Welfare"){
    const data=await women_Wel_Model.find({});
    const name="Women's Welfare Scheme";
    res.render("./pages/women_Scheme",{data,name});
   }
   else{
    res.send("Error ");
   }
});

app.get("/schemes/farmer_Welfare/:id",async (req,res)=>{
    const {id}=req.params;
    const data=await farmer_Schemes_Model.findById(id);
    console.log(data);
    const name="Farmer_Welfare Scheme";
    let descrp="";
    let link="";
    if(data.title=="Pradhan Mantri Fasal Bima Yojana (PMFBY)"){
         descrp="The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from the Government of India. The scheme aims to supplement the financial needs of small and marginal farmers in procuring various inputs to ensure proper crop health and appropriate yields.Under the scheme, income support of ₹6,000 per year is provided to all landholding farmer families across the country in three equal installments of ₹2,000 every four months. The fund is directly transferred to the bank accounts of the beneficiaries.";
         link="https://pmfby.gov.in/";
        }
    else if(data.title=="Kisan Credit Card (KCC) Scheme – A Comprehensive Guide"){
            descrp="The Kisan Credit Card (KCC) Scheme is an initiative by the Government of India aimed at providing timely and affordable credit to farmers. Introduced in 1998 by the Reserve Bank of India (RBI) and the National Bank for Agriculture and Rural Development (NABARD), the scheme helps farmers meet their short-term credit needs for agricultural and allied activities.";
            link="https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan/kisan-credit-card";
           }
    res.render("./pages/farm_sep_scheme.ejs",{data,name,descrp,link});

})

app.get("/schemes/women_Welfare/:id",async (req,res)=>{
    const {id}=req.params;
    const data=await women_Wel_Model.findById(id);
    res.render("./pages/women_sep_scheme.ejs",{data});

})


app.post("/login", (req, res) => {
    let {username,password}=req.body;
    console.log(username,password);
    res.send("Successfully login");
});

app.listen(process.env.port, () => {
    console.log(`Server running on port ${port}`);
});
