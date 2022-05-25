const { response } = require('express');
var User = require('../models/User');

//       POST :  ADD A NEW USER TO THE DATABASE - DONE
exports.userCreate = async function(req, res) {
    if(!req.body){
      res.send("content can not be empty");
    }
    const user=new User({
      name: req.body.name,
      age: req.body.age
    });
    user.save(user)
      .then(data=>{
        res.send(data);})
      .catch(err=>{
        res.status(500).send({
          message: err.message("error, create operation failed")
        });
      });
};

//       GET :  RETURN ALL USERS - DONE.
exports.userList =(req, res)=>{
    User.find()
      .then(user=>{
      res.send(user)})
      .catch((err)=>{
        res.status(500).send({message: err.message ||"Error occured when finding the users."})
      })
};

//       PUT : EDIT A USER BY ID - DONE
exports.userUpdate = function(req, res) {
    if(!req.body){
      res.send("updated content can not be empty").status(400);
    }
    const id=req.params.id;
    User.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
      .then(data =>{
        if(!data){
          res.status(404).send({message: ` can not update with id: ${id}, not found.`});
        }
        else{ res.send({message: `user updated successfully!`})}
      })
      .catch(err=>{
        res.status(500).send({
          message:`Could not delete user with id: ${id}`
        })
      });
  };

//       DELETE : REMOVE A USER BY ID - DONEEE
exports.userDelete = async function(req, res) {
    const id=req.params.id;
    User.findByIdAndDelete(id)
      .then(data =>{
        if(!data){
          res.status(404).send({message:`can not delete element with id: ${id}, not found.`})
        }else{ res.send({message: `User Deleted Successfully!`})}
      })
      .catch(err=>{
        res.status(500).send({
          message:`Could not delete user with id: ${id}`
        })
      })
}
