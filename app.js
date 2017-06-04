'use strict'
const express = require('express')
const createHtml = require('./create-html')
const search = require('./search')
const searchHistory = require('./search-history')

const app = express()

app.get('/', (req, res) => {
  res.send(createHtml())
})

app.get('/search/:queryString', (req, res) => {
  search({ queryString: req.params.queryString, page: req.query.offset}, result => {
    searchHistory.save(req.params.queryString)
    res.json(result)
  })
})

app.get('/latest', (req, res) => {
  searchHistory.latest(result => res.json(result))
})

const port = process.env.PORT || 3000
console.log('listening on port ' + port)
app.listen(port)