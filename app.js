const express = require("express")
const db = require("./database/connection")
const app = express()

app.get("/", (req,res)=>{
    res.json({
        message: "done"
    })
})

app.listen(3000, ()=>{
    console.log("Project Connection Successfylly")
})