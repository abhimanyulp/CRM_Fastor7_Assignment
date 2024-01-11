const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true
    },
    assigned: {
      type: Boolean,
      default: false
    },
    assignedEmployeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }, 
  { 
    timestamps: true,
    versionKey: false 
})

const enquiryModel = mongoose.model("enquiry", schema)

module.exports = { enquiryModel }