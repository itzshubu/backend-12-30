import mongoose from "mongoose";
import express from "express"
import User from "../models/userSchema.js"
import Product from "../models/ProductSchema.js"


const Routes = express.Router()

// Routes.get()
Routes.post("/addProduct", async(req ,res)=>{
  console.log("hiii")
  console.log(req.body)
  await Product.insertMany(req.body)
  res.send({message : "user created succesfully"})
})




export default Routes