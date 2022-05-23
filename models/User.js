const mongoose=require('mongoose');
const { Schema } = mongoose;

//defining schema
const userSchema = new Schema({
  name:  String, 
  age: Number
});

//creating and exporting a model
module.exports = mongoose.model('User', userSchema)
