
const express = require("express")

const app = express()
const dataRouter = require("./Routes/data")
const cors = require('cors')

// app.get("/Home", (req,res)=>{
  
//     res.send("welcome to Home page")

// })
app.use(cors())
app.use("/api",dataRouter)

app.listen(process.env.PORT||8080, ()=>{
    console.log("server running")
})

