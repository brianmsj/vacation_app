const mongoose = require('mongoose');


//ADDED THE USER SCHEMA
const userSchema = mongoose.Schema({

  name: {type: String, required: true},
  id: {type: String, required: true},
  profilePicURL: String,
  accessToken: String,
  expiresAt: Number
})


const vacationSchema = mongoose.Schema({
  country: {type: String, required: true},
  city:{type: String, required: true},
  description: {type: String, required: true},
  videoUrl: {type: String, required: true},
  soundUrl: String
})






const User = mongoose.model('User',userSchema);
const Vacation = mongoose.model('Vacation',vacationSchema);


module.exports = {User,Vacation};
