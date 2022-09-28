const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.connect('mongodb+srv://laurafiap:YS2X5wap7sD7yzP@cluster0.wlvu8ox.mongodb.net/xavier-corporation');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//schema
const productsSchema = {
    title: String,
    price: Number,
    description: String,
    active: Boolean
}

//model
const Products = mongoose.model("Products", productsSchema);

//pagina index
app.get("/", function(req, res){
    res.sendFile(__dirname + "/pages/index.html");
})

//pagina de cadastro

app.get("/cadastro", function(req, res){
    res.sendFile(__dirname + "/pages/cadastro.html");
})

app.post("/cadastrar", function(req, res){
    let newProduct = new Products({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        active: req.body.active,
    })
    const http = require('http');
    const data = JSON.stringify({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        active: req.body.active,
    });
    const options = {
        host: "localhost",
        port: 3030,
        proxy: "http://localhost:3030",
        path: "/sending-email",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Lenght": data.length,
        },
    };
    const request = http.request(options, (res)=>{
        console.log("statusCode: ", res.statusCode);
        let result = "";
        res.on("data",(chunk)=>{
            result += chunk;
        });
        res.on("end", ()=>{
            console.log("Result is: " + result);
        });
    });
    request.on("error", (err)=>{
        console.log("Error: " + err.message);
    });
    request.write(data);
    request.end()
    newProduct.save();
    res.redirect("/");
})


//pagina de produtos
app.set('view engine', 'ejs');

app.get("/lista", function(req, res){
    Products.find({}, function(err, products){
        res.render('index', {
            productsList: products
        })
    })
})

//server
app.listen(3000, function(){
    console.log("Server is running on 3000");
})