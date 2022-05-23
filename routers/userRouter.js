//creating routes for our userSchema
const express = require('express');
var router = express.Router();
var user = require('../controllers/userController');

//       GET :  RETURN ALL USERS
router.get('/user', user.userList)
//       POST :  ADD A NEW USER TO THE DATABASE
router.post('/user/add', user.userCreate)
//       PUT : EDIT A USER BY ID
router.put('/user/update/:id', user.userUpdate)
//       DELETE : REMOVE A USER BY ID
router.delete('/user/delete/:id', user.userDelete)
module.exports = router;
