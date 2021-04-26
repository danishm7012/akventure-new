const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AkContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    required: true,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = AkContact = mongoose.model('akcontact', AkContactSchema)
