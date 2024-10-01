const express = require ('express');

const authController = require ('../controller/authController');

const router = express.Router ();

//testing 
routes.get('/test', (req,res) => res.json({msg: 'working'}) )

//user 

//login 
router.post ('/login, authController.login');


//register 
router.post ('/login, authController.register');

//logout 
//refresh 

//blog 
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