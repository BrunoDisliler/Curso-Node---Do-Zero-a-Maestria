const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/dashboard', (req, res) => {
  const items = ['item a', 'item b', 'item c']
  res.render('dashboard', { items })
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'Javascript',
    body: 'Este artigo irá ajudar você a aprender Node.js....',
    comments: 4
  }

  res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'Back-End',
      body: 'Teste',
      comments: 445
    },
    {
      title: 'MySQL',
      category: 'Banco de Dados',
      body: 'Teste',
      comments: 434
    },
    {
      title: 'Aprender HTML',
      category: 'Front-End',
      body: 'Teste',
      comments: 200
    },
    {
      title: 'Aprender Python',
      category: 'Back-End',
      body: 'Teste',
      comments: 12
    }
  ]

  res.render('blog', { posts })
})

app.get('/', function (req, res) {
  const user = {
    name: 'Bruno',
    surname: 'Disliler',
    age: 30
  }

  const auth = true

  const approved = false

  res.render('home', { user, auth, approved })
})

app.listen(3000)