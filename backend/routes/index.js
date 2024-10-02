const express = require ('express');

const authController = require ('../controller/authController');

const router = express.Router ();


//make end point for testing
//testing 
routes.get('/test', (req,res) => res.json({msg: 'working'}) )

//user 

//login 
router.post ('/login, authController.login');


//register 
router.post ('/register, authController.register');

//logout 

//token exptire ho jaye to automatically refresh karaye ga
//refresh 

//blog 

//CRUD operation in React stands for Create, Read, Update, and Delete. CRUD is an important concept for organizing and managing data across the web application.
//CRUD
//create 
//read all blogs
//read blog by id 
//update 
//delete 

//comment 
//create comment 
//read comments by blog id 


module.exports = router;