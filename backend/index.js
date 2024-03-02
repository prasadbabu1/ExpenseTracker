const express = require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const expenseRoutes=require("./routes/expenseRoutes")
const app = express()
const port=3009

app.use(express.json())
app.use(cors())

//connect to db

mongoose.connect("mongodb+srv://expenseTracker:expenseTracker@cluster0.4ekbjrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

//Routes
app.use("/expenses",expenseRoutes)

//start server

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})