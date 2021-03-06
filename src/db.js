const flatfile = require('flat-file-db')
const promise = require('promise')

const db = flatfile.sync(process.env.DB_NAME || 'views.db')

const promisifiedDb = {
  // Promisify async operations
  put: promise.denodeify(db.put.bind(db)),
  del: promise.denodeify(db.del.bind(db)),
  clear: promise.denodeify(db.clear.bind(db)),

  get: db.get.bind(db),
  has: db.has.bind(db),
  keys: db.keys.bind(db),
  close: db.close.bind(db),
}

module.exports = promisifiedDb
