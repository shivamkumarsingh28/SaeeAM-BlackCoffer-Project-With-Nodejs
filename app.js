const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const url = 'mongodb://127.0.0.1:27017/SaeeAM_Blackcoffer'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.set('view engine', 'ejs');

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/',alienRouter)


app.listen(9000, () => {
    console.log('Server started')
})