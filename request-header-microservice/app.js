const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/api/whoami', (req, res) => {
  const data = {
    ip: req.headers['x-forwarded-for'].split(',')[0] || req.connection.remoteAddress || req.ip,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].split('(')[1].split(')')[0]
  }
  res.render('whoami.ejs', {data: data})
})

app.listen(process.env.PORT || 5555, function() {
  console.log('Server is running...')
})