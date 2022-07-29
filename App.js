
const express = require("express")

const app = express()
const dataRouter = require("./Routes/data")

// app.get("/Home", (req,res)=>{
  
//     res.send("welcome to Home page")

// })

app.use("/api",dataRouter)

app.listen(process.env.PORT||5000, ()=>{
    console.log("server running")
})