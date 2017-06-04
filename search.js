'use strict'
const axios = require('axios')
const clientId = process.env.IMGUR_API_CLIENTID

module.exports = function search({ queryString, page = '0' }, callback) {
  axios({
    headers: { Authorization: 'Client-ID ' + clientId },
    params: { q: queryString },
    url: 'https://api.imgur.com/3/gallery/search/top/all/' + page
  })
  .then(response => {
    const result = 
    response.data.data.map(img => ({ title: img.title, url: img.link }))
    callback(result)
  })
  .catch(err => {
   console.log(err)
   callback({ error: 'Sorry something went wrong :-(' }) 
  })
}