const { response } = require('express');
var user = require('../models/User');

/*exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};*/
//CONTROLLERS:

// Display list of all users.
exports.userList = async function(req, res) {
    try{
        const list= await User.find()
        response.status("found all users successfully.").json(list);
    }
    catch{
        response.status(422).json(`Error: ${err}`)
    }};

// Handle user create on POST.
exports.userCreate = async function(req, res) {
    const{name,age}=request.body
    try{
        const newUser = await User.create({name:name,age:age})
        response.status("created successfully.").json(newUser);
    }
    catch{
        response.status(422).json(`Error: ${err}`)
    }
};

// Handle book delete on POST.
exports.userDelete = async function(req, res) {
    const{_id}=request.body
    try{
        await User.deleteOne({_id:_id})
        response.status("deleted successfully.")
    }
    catch{
        response.status(422).json(`Error: ${err}`)
    }};

// Handle book update on POST.
exports.userUpdate = function(req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};


