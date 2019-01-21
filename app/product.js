//const express = require("express");
import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const fsDemo = require("../fsDemo");


const data = [];
fsDemo.init(data, ()=>console.log("Init db"));


router.get('/', (req, res) =>{

    res.send(data);

});

router.get('/:id', (req, res) =>{
    res.send('A single product by id will be here');
});


router.post('/', (req, res) =>{
    console.log(req.body);


    res.send('ok');
    /*fsDemo.addItem(data, req.body);

    fsDemo.saveData(data, ()=>{
        res.send(data);
    });
*/
});

export default router;
//module.exports = router;
