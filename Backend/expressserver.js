const express = require("express")
const { readFile } = require("fs")
const app = express()
const fs = require('fs')
const path = require('path')
app.listen(3007,()=>{

    app.get('/login',(req,res)=>{
        console.log("It's Login Page")
        app.use(express.static(path.join(__dirname,'public')))
        res.sendFile(path.join(__dirname,'public','loginpage.html'))
       })
       app.get('/home',(req,res)=>{
        console.log("It's Home Page")
        app.use(express.static(path.join(__dirname,'public')))
        res.sendFile(path.join(__dirname,'public','homepage.html'))
       })
    
    
    app.get('/signup',(req,res)=>{
        console.log("It's Signup page")
        res.send("You are in Signup Page")
    })

})