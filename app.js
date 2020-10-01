const express=require('express')
const multer=require('multer')
const ejs=require('ejs')


const app=express()

app.set("view engine","ejs")

app.get('/',function(req,res){
    res.render("html")
})

  
const port=5000

app.listen(port,()=>{
    console.log(`server is listening on ${port}` )
})

