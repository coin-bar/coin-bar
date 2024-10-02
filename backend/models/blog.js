
const mongoose = require('mongoose');

const {Schema} = mongoose;

//model define


const blogSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    photoPath: {type: String, required: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
//parameter
    {timestamps: true}
);
//model name 'blog' , model schema 'blog schema', collection is 'blogs'

module.exports = mongoose.model('Blog', blogSchema, 'blogs');


//why we make models in the backend of mern stack?
// It defines the structure of the data and provides methods to interact with the database.
//The blogging platform is developed using the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack, allowing users to create, read, update, and delete blog posts
//The purpose of a physical schema is to provide a detailed description of how data is stored in the system
//Timestamps in Mongoose automatically add createdAt and updatedAt fields to your schema, which store the document's creation time and last modification time, respectively.