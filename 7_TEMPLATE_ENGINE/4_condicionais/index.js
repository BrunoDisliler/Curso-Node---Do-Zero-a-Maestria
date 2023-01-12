const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/', function (req, res) {
  const user = {
    name: 'Bruno',
    surname: 'Disliler',
    age: 30
  }

  const auth = true

  res.render('home', { user, auth })
})

app.listen(3000)