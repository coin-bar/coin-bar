const mongoose = require('mongoose');

const {Schema} = mongoose;

//model define


const refreshTokenSchema = Schema({
    token: {type: String, required: true},
    userId: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
{timestamps: true}

);

module.exports = mongoose.model('RefreshToken', refreshTokenSchema, 'tokens');


//The purpose of a physical schema is to provide a detailed description of how data is stored in the system
//Timestamps in Mongoose automatically add createdAt and updatedAt fields to your schema, which store the document's creation time and last modification time, respectively.