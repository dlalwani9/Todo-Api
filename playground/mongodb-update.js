//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Voila! Connected to MongoDB Servers.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectId("59d909ca3b73fa20941d3297")
  // },{
  //   $set:{
  //   completed:true
  //       }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    name:"Hanish"
  },{
    $set:{
      name:"Debanshu"
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });

//db.close();
});
