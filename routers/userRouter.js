//creating routes for our userSchema
const express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

//       POST :  ADD A NEW USER TO THE DATABASE
router.post('/user', user.userCreate)
//       GET :  RETURN ALL USERS
router.get('/user', user.userList)

//       PUT : EDIT A USER BY ID
router.put('/user/:id', user.userUpdate)
//       DELETE : REMOVE A USER BY ID
router.delete('/user/:id', user.userDelete)
module.exports = router;
