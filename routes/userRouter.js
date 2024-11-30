const express=require('express')
const rootDir = require("../utils/pathUtil");
const path=require('path');
const userRouter=express.Router()

userRouter.get("/add-home", (req, res, next) => {
  
  res.sendFile(path.join(rootDir,"views","add-home.html"));
});


module.exports=userRouter