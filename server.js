
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let products = [
 {name:"iPhone 13 (Used)",price:42000},
 {name:"Gaming Laptop",price:55000}
];

app.get("/products",(req,res)=>{
 res.json(products);
});

app.post("/products",(req,res)=>{
 products.push(req.body);
 res.json({status:"ok"});
});

app.listen(5000,()=>{
 console.log("Server running on http://localhost:5000");
});
