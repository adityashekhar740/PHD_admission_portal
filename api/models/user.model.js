const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/phd_admission_portal");

const userSchema = mongoose.userSchema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const user=mongoose.model( "User", userSchema );

module.exports=user;