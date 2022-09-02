const { Schema, model } = require("mongoose")

const Curriculum = new Schema({
  name: {
    type: String,
    required: true
  },
  goal: {
    type: String
  },
  description: {
    type: String
  }, 
  sections: [{
    name: {
      type: String,
      required: true,
    },
    resources: [String],
    projects: [String]
  }]
}, { timeStamps: true })


module.exports = model("Curriculum", Curriculum)
