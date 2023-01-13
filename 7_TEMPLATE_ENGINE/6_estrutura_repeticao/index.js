const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const items = ['item a', 'item b', 'item c']
  res.render('dashboard', {items})
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