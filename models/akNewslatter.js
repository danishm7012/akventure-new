const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AkNewslatterSchema = new Schema({
  email: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = AkNewslatter = mongoose.model(
  'aknewslatter',
  AkNewslatterSchema
)
