const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB servers');
  }
  console.log('Voila! Connected to MongoDB Servers.');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     console.log('Unable to insert',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });


db.collection('Users').insertOne({
  name:'Debanshu Lalwani',
  age:'20',
  location:"Kolkata"
},(err,result)=>{
  if(err){
    return console.log('Unable to insert',err);
  }
  console.log(result.ops);
  console.log(result.ops[0]._id.getTimestamp());
});

db.close();
});
