import express from "express";
import cors from "cors";



import product from "./app/product";



const app = express(); //создаем экземпляр



//const bodyParser = require("body-parser");

const port = 8000;

//Here we are configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use("/products", product);




app.listen(port,() =>{
    console.log(`Server started on ${port} port`);
});