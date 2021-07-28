const express = require('express')
const morgan = require('morgan')
const app = express()
const contactRouter = require('./router')

app.use(morgan('dev'))

app.use(express.urlencoded()) 
app.use(express.json())
 
app.use('/contact',contactRouter)

app.get('*',(req,res)=>{
res.send("<h1>404 route not found </h1>")
})
const PORT = process.env.PORT || 3434
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})