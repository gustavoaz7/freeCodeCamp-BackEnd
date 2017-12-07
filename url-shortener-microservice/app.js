const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validUrl = require('valid-url')
var counter = 0;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/url-shortener', { useMongoClient: true })
.then(() => console.log('Database connected successfully.'))
.catch(err => console.log('Error connecting to database: ' + err.message))
const urls = mongoose.connection.collection('urls');

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // Invalid URL
  if (!validUrl.isUri(req.body.URL)) return res.render('shortened', {error: 'Invalid URL'})
  // Valid URL
    // URL already registered in our database
  urls.findOne({originalUrl: req.body.URL}, (err, data) => {
    if (err) throw err;
    if (data) {
      return res.render('shortened', {
        originalUrl: data.originalUrl, 
        shortUrl: `localhost:3333/${data.counter}`, 
        error: null
      })
    } else {
      // URL not registered in out database
      counter++;
      urls.insertOne({originalUrl: req.body.URL, counter: counter}, (err, data) => {
        if (err) throw err;
        return res.render('shortened', {
          originalUrl: req.body.URL, 
          shortUrl: `localhost:3333/${counter}`, 
          error: null
        })
      })
    }
  })
})

app.get('/:num', (req, res) => {
  const num = Number(req.params.num)
  urls.findOne({counter: num}, (err, data) => {
    if (err) throw err;
    if (!data) return res.render('shortened', {error: 'URL not found'})
    return res.redirect(data.originalUrl)
  })
})

app.listen(3333, () => console.log('Server is up and running...'))