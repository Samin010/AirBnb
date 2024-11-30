const express=require('express')
const rootDir = require("../utils/pathUtil");
const homeRouter=express.Router()
const path=require('path');
const { registeredHomes } = require('./hostRouter');

homeRouter.get('/',(req,res,next)=>{
  console.log(registeredHomes)
  res.render('home',{registeredHomes:registeredHomes})
})

module.exports=homeRouter