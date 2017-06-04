'use strict'
const mongo = require('mongodb').MongoClient
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/imgur-search-abstraction-layer'

module.exports.save = function insert(term) {
  const document = { term, created: new Date() }

  mongo.connect(dbUrl, (err, db) => {
    if (err) throw err
    const collection = db.collection('searches')
    collection.insert(document, () => db.close())
  })
}

module.exports.latest = function latest(callback) {
  mongo.connect(dbUrl, (err, db) => {
    if (err) throw err
    db.collection('searches')
    .find({}, { _id: 0 })
    .sort({ created: -1 })
    .limit(20)
    .toArray()
    .then(result => {
      callback(result)
      db.close()
    })
  })
}