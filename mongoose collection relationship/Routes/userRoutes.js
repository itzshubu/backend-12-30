import mongoose from "mongoose";
import express from "express"
import User from "../models/userSchema.js"
import Product from "../models/ProductSchema.js"

const Routes = express.Router()

// Routes.get()


Routes.post("/addtocart/:productID", async (req, res) => {
let {email} = req.body
  let { productID } = req.params
  let product = await Product.findById( productID)
  console.log(product)
  let user = await User.findOne({email})

  user.Cart.push(product._id)
  user.save()
  res.send({ message: "product added to cart" })
})



export default Routes