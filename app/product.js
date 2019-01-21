//const express = require("express");
import express from "express";
import multer from "multer";
import path from "path";
import nanoid from "nanoid";


import config from "../config";
import db from "../db";


const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, config.uploadPath)
    },
    filename(req, file, cd){
        cd(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});


const router = express.Router();



const data = [];
db.init(data, ()=>console.log("Init db"));


router.get('/', (req, res) =>{

    res.send(data);

});

router.get('/:id', (req, res) =>{
    res.send('A single product by id will be here');
});


router.post('/', upload.single ("image"), (req, res) =>{
    console.log(req.body);

    const product = req.body;
    if(req.file) product.image = req.file.filename;

    db.addItem(data, req.body);

    db.saveData(data, ()=> res.send(product));

    //res.send(product);

});

export default router;
//module.exports = router;
