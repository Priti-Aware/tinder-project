const express = require('express')
// const {MongoClient} = require('mongodb')
// const uri = MONGDB_URI

const app = express()

const PORT = 8000

app.get('/',(req,res)=>{
    res.json('Hello')
})

app.listen(PORT, ()=> console.log("Server running on PORT " + PORT))