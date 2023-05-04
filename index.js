const express = require('express');
const chefData = require('./data.json')
const cors = require('cors')
const app = express()
const port = 5000;

app.use(cors())
app.get('/', (req, res)=>{
    res.send('Chef Recipe Server side Running')
})
app.get('/chef', (req, res)=>{
    res.send(chefData)
})
app.listen(port, ()=>{
    console.log(`Cher recipe website is running on port ${port}`)
})