//const express = require("express");
import express from "express";
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
    fsDemo.addItem(data, req.body);

    fsDemo.saveData(data, ()=>{
        res.send(data);
    });

});

export default router;
//module.exports = router;
