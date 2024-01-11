const mongoose = require("mongoose")
const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['Employee', 'Counselor'],
        required: true,
      }
},{
    versionKey: false
})

const userModel = mongoose.model("user", schema)

module.exports = { userModel }