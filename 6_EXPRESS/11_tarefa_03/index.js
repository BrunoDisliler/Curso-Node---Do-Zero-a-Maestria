const express = require('express')
const app = express()
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const port = 5000
const users = require('./users')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.get('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})