const express = require('express')
const { static, response } = require('express')
const bodyParser = require('body-parser')
const request=require('request');
const path=require('path');
const { Console } = require('console');
const { name } = require('ejs');

const app = express()
const port = process.env.PORT || 3000

var type="";
var state="";
var district="";
var personName="";
var number=0;

const apiUrl = "https://api.apispreadsheets.com/data/12439/";

//paths
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../views');
app.use(static(publicPath)) 

app.use(bodyParser.urlencoded({ extended: false })) 

app.set("view engine","ejs"); 
app.set("views",viewsPath);

app.get('/',(req,res)=>{
    res.render("home");
})

app.post('/send',(req,res)=>{
    type=req.body.type.toLowerCase();
    state=req.body.state.toLowerCase();
    district=req.body.state.toLowerCase();
    personName=req.name.toLowerCase();
    number=req.body.number;
    var url = apiUrl+"&query="+
    
    res.redirect('/');
})
app.listen(port, () => console.log(`Server is running on http://localhost:`+port))