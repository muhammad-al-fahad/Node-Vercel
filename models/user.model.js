const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  email: {
    type: String,
    require: true
  }, 
  password: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'user',
    require: true
  },
  avatar: {
    type: String,
    require: true
  }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)


