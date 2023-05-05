const express = require('express');
const chefData = require('./data.json')
const cors = require('cors')
const port = process.env.PORT || 5000;
const app = express()

app.use(cors())
app.get('/', (req, res)=>{
    res.send('Chef Recipe Server side Running')
})
app.get('/chef', (req, res)=>{
    res.send(chefData)
})
app.get('/chef/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChef = chefData.find(chef => chef.id === id) || {}
    res.send(selectedChef)
})
app.listen(port, ()=>{
    console.log(`Cher recipe website is running on port ${port}`)
})