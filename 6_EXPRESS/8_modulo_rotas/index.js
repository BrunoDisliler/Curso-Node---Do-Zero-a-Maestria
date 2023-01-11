const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const users = require('./users')
const basePath = path.join(__dirname, 'templates')

// Ler o Body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use('/users', users)

app.get('/', (_req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})
