const mongoose = require('mongoose');

const {Schema} = mongoose;

//model define

const userSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
},
    {timestamps: true}
);

module.exports = mongoose.model('User', userSchema, 'users');

//The purpose of a physical schema is to provide a detailed description of how data is stored in the system
//Timestamps in Mongoose automatically add createdAt and updatedAt fields to your schema, which store the document's creation time and last modification time, respectively.