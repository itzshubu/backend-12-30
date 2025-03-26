import express from "express"
import mongoose from "mongoose";
const app = express()
const port = 3000
import User from "./models/userSchema.js"
import userRoutes from './Routes/userRoutes.js';
import adminRoutes from "./Routes/adminRoutes.js"
import jwt from "jsonwebtoken"
import env from "dotenv"

env.config()
app.use(express.json())
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)



async function condb(){
    try {
        await   mongoose.connect("mongodb://localhost:27017/ecomdbnew")
        console.log("connect to db")
        
    } catch (error) {
         console.log('erroe',error)   
    }
}
condb()

// commonroutes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// commonroutes
app.get('/products', (req, res) => {
  res.send('Hello World!')
})

app.post("/signup", async (req, res) => {
  console.log("hiii")
  console.log(req.body)
  await User.create(req.body)
  res.send({ message: "user created succesfully" })
})

app.post("/login",async(req , res)=>{
  let {email , password} = req.body
  console.log(email , password)
  // find the user
  let user = await User.findOne({email}).populate("Cart")
  console.log(user)
  if(!user){
    res.status(409).send({message : "user not found!"})
    return
  }
 console.log( process.env.JWT_KEY)
  var token = jwt.sign({id : user._id }, process.env.JWT_KEY , { expiresIn: '24h' });
  console.log(token)
  res.send({message : "login successfullyy.." , token , user})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})