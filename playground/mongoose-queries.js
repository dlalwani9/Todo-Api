const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/users');
// var id='59df51c96ca7dd0f54d7723a';
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos ',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo ',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id',todo);
// });
var id='59de0be133bf3f0b4c1deacf';

if(!ObjectID.isValid(id)){
  console.log('Id is not valid');
}

Users.findById(id).then((user)=>{
  if(!user){
  return console.log('No such user found');
}
console.log('User',user);
}).catch((e)=>console.log(e));
