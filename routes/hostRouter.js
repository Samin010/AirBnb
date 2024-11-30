const express=require('express')
const rootDir = require("../utils/pathUtil");
const path=require('path')
const hostRouter=express.Router()

const registeredHomes=[]

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home registered succesfully for',req.body.houseName)
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "Home-added.html"));
});

module.exports = {
  hostRouter,
  registeredHomes,
};