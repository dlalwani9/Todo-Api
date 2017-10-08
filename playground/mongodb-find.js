//const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Voila! Connected to MongoDB Servers.');

  // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to connect to MongoDB Servers',err);
  // });

  // db.collection('Todos').find().count().then((docs)=>{
  //   console.log('Todos Count:',docs);
  // },(err)=>{
  //   console.log('Unable to connect to MongoDB Servers',err);
  // });

  db.collection('Users').find({name:'Debanshu Lalwani'}).toArray().then((docs)=>{
    console.log(docs);
  },(err)=>{
    console.log('Unable to fetch documents from MongoDB Servers',err);
  });

//db.close();
});
