const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // Leitura da tabela users e resgatar usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (_req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})