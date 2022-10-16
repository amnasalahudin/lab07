import mongoose from 'mongoose';
const { Schema } = mongoose;

const nameSchema = new Schema({
  name:  {String, // String is shorthand for {type: String}
  required: true
},
 
});

var userModel = mongoose.model('User', nameSchema);
module.exports = userModel;

