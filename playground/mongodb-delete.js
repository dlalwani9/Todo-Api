//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Voila! Connected to MongoDB Servers.');

  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Todos').deleteOne({text:"Eat Lunch"}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name:'Debanshu Lalwani'}).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({_id:new ObjectId("59d928ed2e6e222074315ecf")}).then((res)=>{
    console.log(res);
  });

//db.close();
});
