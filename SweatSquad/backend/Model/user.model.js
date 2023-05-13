const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    equipment: { type: String },
    typicalDay: { type: String },
    currentWeight: { type: Number },
    userHeight: { type: Number },
    goalWeight: { type: Number },
    age: { type: Number },
  },
  {
    versionKey: false,
  }
);

const userModel = model("users", userSchema);

module.exports = { userModel };
