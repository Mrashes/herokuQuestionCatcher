const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const questions = [];

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use( bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/list', (req, res) => res.send(questions))
  .get('/addToList', (req, res) => {
    questions.push(req.query)
    res.render('pages/index')
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
