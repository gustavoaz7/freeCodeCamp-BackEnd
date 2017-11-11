const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const convertTime = require('./convertTime.js')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('timestamp', {convertedTime: convertTime(req.body.date)})
})

app.listen(3333, function() {
  console.log('Server is up and running')
})