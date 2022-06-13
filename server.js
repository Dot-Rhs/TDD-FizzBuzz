// const http = require('http');
const {fizzBuzz} = require('./index')


const port = process.env.port || 4000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end("{'message': 'Hello'}")
// })

// server.listen(port, () => {
//     console.log(`Listening on port ${port}`)
// })

const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome to my Burger`)
})

app.get('/:number', (req, res) => {
    const userNumber = parseInt(req.params.number)
    let doesItFizz = fizzBuzz(userNumber)
    res.type('application/json');
    res.send(`{ 'does it fizz': ${doesItFizz}}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})